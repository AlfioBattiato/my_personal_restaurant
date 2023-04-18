import './SectionDelivery.css'
import Button from '../../Button';
function SectionDelivery() {

    let cambiaDisplay = () => {
        let sectionPrenotazione = document.querySelector(".sectionPrenotazione")
        sectionPrenotazione.style.display = "block"

    }
    return (
        <section>
            <div className="delivery">
                <h3>Consegna con rider</h3>
                <h1>L'esperienza Sushi&Sushi, dove vuoi</h1>
                <p>Hai voglia di sushi ma non riesci a passare dal ristorante? Non preoccuparti, veniamo noi da te!</p>
                <Button value="SCOPRI ORA" miafunzione={cambiaDisplay}></Button>


            </div>

        </section>



    )
}
export default SectionDelivery;