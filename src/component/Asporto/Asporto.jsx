import './Asporto.css'
import ContenitoreCard from '../ContenitoreCard';
import lista from '../ContenitoreCard/listamenu.json'
import NavMenu from '../NavMenu/NavMenu';
import { useState } from 'react';

function Asporto() {

    const tutto = lista.card;
    const urakami = lista.card.filter(element => element.categoria == "urakami");
    const piatto = lista.card.filter(element => element.categoria == "piatto");


    const [pietanze, setPietanze] = useState(tutto);



    return (
        <>
            <div className='asporto'>
                <h1>Delivery e Take Away</h1>
                <img src="./assets/ominoconsegna.png" alt="" />
                <h2>Il sushi a casa tua</h2>
                {/* <p>Sushi Live è ristorante, take away & delivery. La nuova e raffinata location è sita nel centro storico a pochi passi da via Etnea, dove è possibile gustare diverse specialità della cucina tipica giapponese.
                     Con il riso, le verdure e il pesce, il Sushi Live, propone un’ampia scelta di piatti preparati da chef altamente specializzati. Riso e pesce quest’ultimo non necessariamente deve essere servito crudo, ma anche 
                    cotto costituiscono un connubio perfetto per una cucina prelibata e di qualità.</p> */}
                <h3>Hai già provato le novità del nostro menù? Scopri il sapore dei nostri roll vegani, i vivaci futomaki e i contorni ricchi di verdure, adatti ad ogni pasto. Ordina online! </h3>

            </div>


            <div className="menu" id='menu' path="asporto">
                <div>
                    <h1> Il nostro menu</h1>
                    <div>
                        <img src="./assets/icons8-ristorante-100.png" alt="" />
                        <img src="./assets/icons8-sushi-100.png" alt="" />
                    </div>
                </div>
                <div>
                    <span>Vuoi sapere cosa stanno preparando in cucina i nostri Artigiani altamente qualificati? Qui troverete tutto, dove ogni singola pietanza del nostro menù è fatta a mano con amore e abilità,
                        utilizzando tecniche tradizionali e ingredienti di alta qualità.</span>

                </div>

            </div>


            <NavMenu tutto={() => {setPietanze(tutto)}} piatti={() => { setPietanze(piatto)}} urakami={() => {setPietanze(urakami)}} />
            <div className='raccoglitoreCard'>

                <ContenitoreCard lista={pietanze}></ContenitoreCard>

            </div>
        </>
    )
}
export default Asporto;
