import Ordina from '../Ordina';
import './Prenotazione.css'
function Prenotazione() {
    return (
        <>
            <div className="prenotazione">
                <div className='ristorante2'>
                <h2>All You Can Eat</h2>
                <h1>Sushi&Sushi</h1>
                <h2>Pranzo € 15.90  Cena €25.90</h2>
                <h4>COPERTO 2 € A PERSONA</h4>
                <p>I Ristoranti Sushi&Sushi si contraddistinguono per le tipiche atmosfere 
                    le lontano oriente. Lasciati trasportare in un angolo di mondo in cui i colori e i sapori si fondono tra loro per farti vivere una nuova esperienza visiva e sensoriale.</p>
                </div>

                {/* form di prenotazione */}
                <div className='form'>
                    <form action='' name='form' method='post'>
                        <h3>Effettua una prenotazione</h3>
                        <input type="number" min={1} max={10} id='numeroPersone' placeholder='Numero Persone' required />

                        <input type="date" id='data' placeholder='Data' min={new Date().toISOString().split('T')[0]}  required />
                        <select  id="" required>

                            <option value="orario" >Orario</option>
                            <option  value="11.30">11.30</option>
                            <option value="12.00">12.00</option>
                            <option value="12.30">12.30</option>
                            <option value="13.00">13.00</option>
                            <option value="13.30">13.30</option>
                            <option value="14.00">14.00</option>
                            <option value="19.00">19.00</option>
                            <option value="19.30">19.30</option>
                            <option value="20.00">20.00</option>
                            <option value="20.30">20.30</option>
                            <option value="20.30">21.00</option>
                            <option value="20.30">21.30</option>
                            <option value="20.30">22.00</option>
                        </select>
                        
                        <input type="text" placeholder='Nome e Cognome'  required/>
                        <input type="tel" placeholder='Telefono' required />
                        <input type="email" placeholder='Email' required />
                        <textarea name="" id="" cols="10" rows="4"  placeholder='Ulteriori richieste'></textarea>

                        <input type="submit" className='submit' />
                    </form>
                </div>


            </div>
        </>
    )
}
export default Prenotazione;