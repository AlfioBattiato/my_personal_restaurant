import lista from './listamenu.json'
import './contenitoreCard.css'
import Button from '../Button/Button';

function ContenitoreCard({ lista }) {




    return (
        <>

            {lista.map((element, index) => (

                <div key={index} className='card'>
                    <img src={element.url} alt="" />
                    <h3>{element.titolo}</h3>
                    <p>{element.descrizione}</p>
                    <p>{element.prezzo + ".00€"}</p>

                    <Button value='AGGIUNGI'></Button>

                </div>
            ))}

            {/* {lista.forEach(element => {
               return <div>
                    <img src={element.url} alt="" />;
                    <h3>{element.titolo}</h3>;
                    <p>{element.descrizione}</p>;
                    <p>{element.prezzo + ".00€"}</p>
                </div>


            })} */}

        </>
    )
}
export default ContenitoreCard;