import '../footer/style.css'

export function Footer() {
    return(
        <> <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>Applic.co</h1>
                <p>Same Mistake of James Blunt</p>
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
                    <a href="/dev" class="footer-links">Suporte</a>
                </li>
                <li>
                    <a href="#" class="footer-links"></a>
                </li>
                <li>
                    <a href="#" class="footer-links"></a>
                </li>
            </ul>
            <ul class="footer-list">
                <li><h3>Produtos</h3></li>
                <li>
                    <a href="/dev" class="footer-links">App</a>
                </li>
                <li>
                    <a href="/dev" class="footer-links">Desktop</a>
                </li>
                <li>
                    <a href="/dev" class="footer-links">Cloud</a>
                </li>
                </ul>
                <div id="footer_copyright">
                  © 2024 Applic.co, Inc. 
                  <ul id="links-externos">
                  <li><a href="/dev" class="externo-links">Termos</a></li>
                  <li><a href="/dev" class="externo-links">Política</a></li>
                  <li><a href="/dev" class="externo-links">Cookies</a></li>
                </ul>
                </div></div>
        </footer>
        </>
    )
}