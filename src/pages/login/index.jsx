import React from "react"
import '../login/style.css'
import loginImg from '../../assets/loginImg.svg'
import { Footer } from "../../componets/footer"

export function Login() {
    return (
        <div id="pagina-login">
        <body id="body-login">
        <form id="login">
            <div className="card-login">
                <h1>Login</h1>
                <p>Enter your datails</p>
                <div className="login-entradas">
                    <input type="email" placeholder="exemple@applic.co" />
                    <input type="password" placeholder="Password"/>
                    <a href="">Reset your password</a>
                    <button>Login</button>
                </div>
                </div>
            <div className="coluna-direita">
                <img id="imgLogin" src={loginImg} alt="welcome" />
                <h2 classname="h2-lebel">Welcome to Applic.co</h2>
                <p>If you don't have an account?</p>
                <a id="a-login" href="/register">Sign Up</a>
            </div>
        </form>
        </body>
         <div id="footer-login"><Footer /></div>
        </div>
    )
}