import { Outlet } from "react-router-dom";
import React from "react"
import { Footer } from "./componets/footer";

export function App() {
    return (
        <div>
            <Outlet/> 
            <Footer />
      </div>    
    )
}
