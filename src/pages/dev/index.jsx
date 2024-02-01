import React from "react"
import '../dev/style.css'
import { Footer } from "../../componets/footer"
import Img from '../../assets/devImg.svg'
import { Link } from "react-router-dom"

export function Dev() {
    return (
        <>
        <body id="body-dev">
        <div id="erro-aviso">
            <div>
        <img id="imgDev" src={Img} alt="construction" title="construindo"/>
            </div>
            <div><h2 id="h2-dev">Em construção</h2> 
            <p>Ainda estamos construindo está página</p>
            <p><Link id="link-dev" to="/">Sair do canteiro</Link></p>
            </div>
        </div>
        </body>
        <div id="footer-dev"> <Footer /></div>
        </>
    )
}