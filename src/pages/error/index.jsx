import React from "react"
import '../error/style.css'
import { Footer } from "../../componets/footer"
import Img from '../../assets/errorImg.svg'
import { Link } from "react-router-dom"

export function Error() {
    return (
        <>
        <body>

        <div id="erro-aviso">
            <div>
        <img src={Img} alt="not found" title="ERROR NOT FOUND"/>
            </div>
            <div><h2>ERROR 404: PAGE NOT FOUND</h2> 
            <p>Essa pagina não existe nos nossos servidores.</p>
            <p><Link to="/">Voltar para a rota</Link></p>
            </div>
        
        </div>
        <Footer />
        </body>
        </>
    )
}