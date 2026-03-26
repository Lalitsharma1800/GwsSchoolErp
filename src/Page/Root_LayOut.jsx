import { Outlet, useNavigation } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

export default function Root_LayOut(){
    
    const navigation = useNavigation();
    const isbusy = navigation.state === "submitting" || navigation.state === "loading"
    return(
      <>
      {isbusy && <Spinner className="size-80"/>}
      <Outlet/>
      </>
    )
}