import React from "react"
import '../../pages/home/style.css'
import { Link } from "react-router-dom"
import { Footer } from "../../componets/footer"




export function Home() {

    const mode = () => {
        const icon = document.getElementById('mode-icon');
        if (icon.classList.contains('fa-moon')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
    }
    const menuShow = () => {

        const menu = document.getElementById('menu-icon');
        let menuMobile = document.querySelector('.mobile-menu');

        if (menu.classList.contains('fa-bars')){
            menu.classList.add('fa-xmark')
            menu.classList.remove('fa-bars')
            menuMobile.classList.add('open');
        } else {
            menu.classList.remove('fa-xmark')
            menu.classList.add('fa-bars')
            menuMobile.classList.remove('open');
        }
    }

    return (

        <body>
            <header>
        <nav class="nav-bar">
            <div class="logo">
                <h1><i class="fa-solid fa-mountain-sun"></i> Applic</h1>
            </div>
            <div class="nav-list">
                <ul>
                    <li class="nav-item"><Link to="/" class="nav-link">Início</Link></li>
                    <li class="nav-item"><Link to="/login" class="nav-link">Entrar</Link></li>
                    <li class="nav-item"><Link to="/register" class="nav-link">Cadastre-se</Link></li>
                </ul>
            </div>
            <h1 id="info01">k2.v.02.03t</h1>
            <i  onClick={mode} id="mode-icon" class="fa-solid fa-moon"></i>
            <i onClick={menuShow} id="menu-icon" class="fa-solid fa-bars"></i>
        </nav>
        <div class="mobile-menu">
            <ul>
                <li class="nav-item"><Link to="/" class="nav-link">Início</Link></li>
                <li class="nav-item"><Link to="/login" class="nav-link">Entrar</Link></li>
                <li class="nav-item"><Link to="/register" class="nav-link">Cadastre-se</Link></li>
            </ul>
        </div>
    </header>
    <main>
    </main>
    <div id="footer-home"><Footer /></div>
        </body>
    )
}