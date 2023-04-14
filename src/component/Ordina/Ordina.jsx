import './Ordina.css'
import Button from '../Button/Button';
import { useState } from 'react';
function Ordina() {
const [sectionPrenotazione,setSectionPrenotazione]=useState('sectionPrenotazione')
function display(){
setSectionPrenotazione('none')

}

    return (


        <div className={sectionPrenotazione}>
            <div className="button" onClick={()=>display()}>
               <img src="/assets/close.png" alt="" />
            </div>


            <div className="ordina">
                <div className="ristorante">
                    <h1>Prenota tavolo</h1>
                    <Button></Button>

                </div>
                <div className="asporto">
                    <h1>Ordina da asporto</h1>
                    <Button></Button>
                </div>
            </div>

        </div>

    )
}
export default Ordina;