import './Ordina.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Prenotazione from '../Prenotazione';

function Ordina() {


    function none() {
        let sectionPrenotazione = document.querySelector(".sectionPrenotazione")
        sectionPrenotazione.style = "display:none";


    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    function hamburger() {
        let span1 = document.querySelector(".span1")
        let span2 = document.querySelector(".span2")
        let span3 = document.querySelector(".span3")
        let ulHamburger = document.getElementById("ulHamburger");

        ulHamburger.setAttribute('class', 'nascosto')
        span2.style.display = "block"
        span1.style.transform = 'rotate(0deg) translate(0px, 0px)';
        span3.style.transform = 'rotate(0deg) translate(0px, 0px)';

    }



    return (


        <div className="sectionPrenotazione">
            <div className="button" onClick={none}>
                <img src="/assets/close.png" alt="" />

            </div>


            <div className="ordina">
                <div className="ristorante">
                    <h1>Prenota tavolo</h1>
                    <Link to='prenotazione' id='link'><Button value="PRENOTA" miafunzione={() => { topFunction(); none(); hamburger() }}></Button></Link>

                </div>
                <div className="asporto">
                    <h1>Ordina da asporto</h1>
                    <Button value="ORDINA" ></Button>
                </div>
            </div>

        </div>

    )
}
export default Ordina;