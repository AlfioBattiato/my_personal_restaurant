import './Ordina.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Prenotazione from '../Prenotazione';

function Ordina() {


    function none() {
        let sectionPrenotazione = document.querySelector(".sectionPrenotazione")
        sectionPrenotazione.style = "display:none";
        topFunction();

    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }



    return (


        <div className="sectionPrenotazione">
            <div className="button" onClick={none}>
                <img src="/assets/close.png" alt="" />
              
            </div>


            <div className="ordina">
                <div className="ristorante">
                    <h1>Prenota tavolo</h1>
                    <Link to='prenotazione' id='link'><Button value="PRENOTA" miafunzione={none}></Button></Link>

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