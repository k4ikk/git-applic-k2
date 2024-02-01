import React from "react"
import '../dev/style.css'
import { Footer } from "../../componets/footer"
import Img from '../../assets/devImg.svg'
import { Link } from "react-router-dom"

export function Dev() {
    return (
        <>
        <body>

        <div id="erro-aviso">
            <div>
        <img src={Img} alt="construction" title="construindo"/>
            </div>
            <div><h2>Em construção</h2> 
            <p>Ainda estamos construindo está página</p>
            <p><Link to="/">Sair do canteiro</Link></p>
            </div>
        </div>
        <Footer />
        </body>
        </>
    )
}