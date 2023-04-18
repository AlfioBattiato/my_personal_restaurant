import './Section2.css';
import Button from '../../Button';
function Section2() {

    let cambiaDisplay = () => {
        let sectionPrenotazione = document.querySelector(".sectionPrenotazione")
        sectionPrenotazione.style.display = "block"

    }
    return (<>
        <section>

            <div className="section2">
            <div className="imgConcept"> </div>

                <div className="concept">
                    <h4>Sushi&Sushi :  il nostro concept</h4>

                    <h1>Ciò che ci anima è la passione per la qualità</h1>
                    <p>Che sia un pranzo tra amici o una serata divano e Netflix, l’esperienza che vogliamo farti vivere è creata seguendo un filo conduttore: la qualità! Ingredienti, sapori e colori porteranno sempre il marchio I-Sushi, in uno dei nostri ristoranti
                        oppure ovunque tu voglia. Con una personalità che non potrai più confondere.</p>
                        <Button value="SCOPRI ORA" miafunzione={cambiaDisplay}></Button>
                        
                </div>


            </div>


        </section>


    </>)

}
export default Section2;