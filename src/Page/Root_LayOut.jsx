import { Outlet, useNavigation } from "react-router-dom";
import React from "react";
import FallBack from "@/components/FallBackElement";

export default function Root_LayOut(){
    
    const navigation = useNavigation();
    const isbusy = navigation.state === "submitting" || navigation.state === "loading"
    return(
      <>
      {isbusy && <FallBack/>}
      {!isbusy && <Outlet/>}
      </>
    )
}