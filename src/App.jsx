import { Outlet } from "react-router-dom";
import React from "react"
import { Footer } from "./componets/footer";
import './App.css'

export function App() {
    return (

        <div id="root">
            <Outlet/> 
            <div id="footer"><Footer /></div>
      </div> 
         
    )
}
