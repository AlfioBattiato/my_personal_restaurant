import './Header.css';
import Button from '../Button';


function Header() {

    return (
        <>
            <div className='header'>
                <h2>All You Can Eat</h2>
                <h1>Sushi&Sushi</h1>
                <div className='section1'>
                    <div className='imgHeader'>
                        <img src='./assets/kisspng-sushi-california-roll-sashimi-makizushi-gimbap-sushi-5a7ac529677247.6936672115179953054237.png' alt="" />

                    </div>
                    <div className="prePage">
                        <h2> Original Sushi experience</h2>
                        <p> Quando il sushi è un piacere a cui non puoi rinunciare,
                            Sushi&Sushi è la scelta giusta. Ambienti nuovi e moderni, un menu Infinity con
                            oltre 120 proposte di sushi tradizionale e creativo e tante promozioni</p>
                        <Button></Button>
                    </div>
                </div>


            </div>

        </>


    )

}
export default Header