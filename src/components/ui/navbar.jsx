"use client";
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Logo from "../logo";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"


// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}) => (
  <svg
    aria-label="Menu"
    className={cn("pointer-events-none", className)}
    fill="none"
    height={16}
    role="img"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...(props)}>
    <path
      className="origin-center -translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
      d="M4 12L20 12" />
    <path
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
      d="M4 12H20" />
    <path
      className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
      d="M4 12H20" />
  </svg>
)

// Default navigation links
const defaultNavigationLinks = [
  { href: "/k1", label: "Home",active: true},
  { href: "/k2", label: "Features"},
  { href: "/k3", label: "Pricing" },
  { href: "/k4", label: "About" },
]

export const Navbar = React.forwardRef((
  {
    className,
    logo = <Logo />,
    logoHref = "#",
    navigationLinks = defaultNavigationLinks,
    user_name = "User Name",
    ...props
  },
  ref,
) => {

  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setIsMobile(width < 768) // 768px is md breakpoint
      }
    }

    checkWidth()

    const resizeObserver = new ResizeObserver(checkWidth)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    };
  }, [])

  // Combine refs
  const combinedRef = React.useCallback((node) => {
    containerRef.current = node
    if (typeof ref === "function") {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }, [ref])

  return (
    <header
      className={cn(
        "font-Roboto sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 md:px-6 **:no-underline",
        className
      )}
      ref={combinedRef}
      {...(props)}>
      <div
        className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-4 ">
          {/* Mobile menu trigger */}
          {isMobile && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group h-9 w-9 hover:bg-accent hover:text-blue-600"
                  size="icon"
                  variant="ghost">
                  <HamburgerIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-48 p-2">
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem className="w-full" key={index}>
                        <NavLink
                          to={link.href}
                            className={ ({isActive}) => cn(
                                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600  disabled:pointer-events-none cursor-pointer no-underline",
                                    isActive ? "text-blue-600" : "text-black"
                                  )
                          }>
                      {link.label}
                        
                        </NavLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          )}
          {/* Main nav */}
          <div className="flex items-center gap-28">
            
              <div className="text-2xl cursor-pointer">{logo}</div>
            {/* Navigation menu */}
            {!isMobile && (
              <NavigationMenu className="flex">
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <NavLink
                        to={link.href}
                        className={ ({isActive}) => cn(
                                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-orange-600   disabled:pointer-events-none cursor-pointer no-underline",
                                isActive ? "text-orange-600" : "text-black"
                              )
                        }
                      >
                      
                            {link.label}
                        
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-1">
          
          <button className="text-sm font-medium hover:bg-neutral-300 rounded-full p-1 hover:text-accent-foreground cursor-pointer active:bg-neutral-200 ">
            <Avatar >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </button>

          {!isMobile && <h1 className="font-bold">{user_name}</h1>}
        </div>
      </div>
    </header>
  );
})

Navbar.displayName = "Navbar"

export {  HamburgerIcon }

// Demo
export function Demo() {
  return (
    <div className="fixed inset-0">
      <Navbar />
    </div>
  );
}
