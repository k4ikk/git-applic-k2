import '../footer/style.css'

export function Footer() {
    return(
        <> <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>Applic.co</h1>
                <p>Same Mistake of James Blund</p>
                <div id="footer_social_icons">
                <a href="#" class="footer-links"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="footer-links"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" class="footer-links"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="footer-links"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
        </div>
            <ul class="footer-list">
                <li><h3>Contato</h3></li>
                <li>
                    <a href="#" class="footer-links">Suporte</a>
                </li>
                <li>
                    <a href="#" class="footer-links">Empresarial</a>
                </li>
                <li>
                    <a href="#" class="footer-links">Vagas</a>
                </li>
            </ul>
            <ul class="footer-list">
                <li><h3>Produtos</h3></li>
                <li>
                    <a href="#" class="footer-links">App</a>
                </li>
                <li>
                    <a href="#" class="footer-links">Desktop</a>
                </li>
                <li>
                    <a href="#" class="footer-links">Cloud</a>
                </li>
                </ul>
                <div id="footer_copyright">
                  © Applic.co, Inc. 2024 All rights reserved. 
                </div></div>
        </footer>
        </>
    )
}