import { Outlet } from 'react-router-dom'
import './Footer.css'
function Footer() {

    let cambiaDisplay = () => {
        let sectionPrenotazione = document.querySelector(".sectionPrenotazione")
        sectionPrenotazione.style.display = "block"

    }
    return (
        <footer>

            <div className="footerDomicilio">
                <h3>Sushi&Sushi a domicilio</h3>
                <p>Ordina il pranzo o la cena a base di sushi da uno dei ristoranti del gruppo.
                    Scegli se fartelo consegnare a casa o se passare in ristorante per il ritiro.</p>
                <a onClick={cambiaDisplay}>Ordina ora</a>
            </div>
            <div className="contatti"  id='contatti'>
                <h3>Contatti</h3>

                <p>Telefono : +39 3773713765  <a href="tel:+393773713765"> Chiamaci</a></p>
                <address>Email :<a href="mailto:battiato3@gmail.com"> battiato3@gmail.com</a></address>
                <p>Dove ci trovi <a href='/'><img src="/assets/maps.png" alt="" /></a></p>
            </div>
            <div className="social">
                <h3>Orari</h3>
                <p>Lunedi a Domenica 11:30 - 15:30 19:00 - 23:30</p>
                <p>Mercoledì Chiusi</p>
                
                <h3>I nostri social</h3>
                <hr />
                <a > <img src="/assets/facebook.png" alt="" /></a>
                <a > <img src="/assets/instagram.png" alt="" /></a>
                <a > <img src="/assets/twitter.png" alt="" /></a>
            </div>
            <Outlet></Outlet>

        </footer>




    )

}
export default Footer