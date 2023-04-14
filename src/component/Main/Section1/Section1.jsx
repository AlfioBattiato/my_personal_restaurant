import './Section1.css'
function Section1() {

    return (<>
        <h1 className='h1FirstSection'>Quattro motivi per scegliere SUSHI&SUSHI</h1>
        <div className="QuattroMotivi">
            <div className="firstSection">
                <div className="why">
                <img src='./assets/qualita.png'alt="" />
                    <div>
                      
                        <h3>Solo sushi preparato al momento</h3>
                        <p>Tutto il nostro sushi è preparato al momento per garantire il massimo della freschezza e del gusto.</p>
                    </div>
                </div>
                <div className="why">
                <img src='./assets/servizio.png'alt="" />

                    <div>
                        <h3>Solo personale altamente qualificato</h3>
                        <p>Tutti i nostri sushiman hanno sostenuto il lungo ed eccellente percorso formativo Sushi Corner.</p>
                    </div>

                </div>
            </div>

            <div className="secondSection">
                <div className="why">
                                    <img src='./assets/salse.png'alt="" />

                    <div>
                    <h3>
                        Salse segrete fatte in casa</h3>
                    <p>Le salse Sushi Corner sono fatte a mano e permettono di esaltare il sapore dei nostri piatti in un modo unico.</p>
                    </div>
                 
                </div>
                <div className="why">
                <img src='./assets/birra.png'alt="" />

                    <div>
                    <h3>Una birra unica creata per il nostro menu</h3>
                    <p>Abbiamo creato una birra che si sposa perfettamente al nostro menu, per valorizzare ed elevare il nostro sushi.</p>
                    </div>
                 
                </div>
            </div>



        </div>


    </>)
}
export default Section1;