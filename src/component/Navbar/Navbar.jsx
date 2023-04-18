import { useRef, useState } from "react"
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom";
function Navbar() {

    const Span1 = useRef(0);
    const Span2 = useRef(0);
    const Span3 = useRef(0);


    const [display, setDisplay] = useState("nascosto")

    const handleClick = (temp) => {
        if (temp === "nascosto") {
            setDisplay("visibile")
            Span2.current.style.display = "none"
            Span1.current.style.transform = 'rotate(45deg) translate(1px, 11px)';
            Span3.current.style.transform = 'rotate(-45deg) translate(-2px, -2px)';

        } else {
            setDisplay("nascosto")
            Span2.current.style.display = "block"
            Span1.current.style.transform = 'rotate(0deg) translate(0px, 0px)';
            Span3.current.style.transform = 'rotate(0deg) translate(0px, 0px)';

        }
    }
    let cambiaDisplay = () => {
        let sectionPrenotazione = document.querySelector(".sectionPrenotazione")
        sectionPrenotazione.style.display = "block"

    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        window.pageYOffset=0;
    }



    return (
        <>
            <div className='navbar'>
                <div className="hamburger" onClick={() => handleClick(display)} >
                    <span className="span1" ref={Span1}></span>
                    <span className="span2" ref={Span2}></span>
                    <span className="span3" ref={Span3}></span>
                </div>


                <div >
                    <ul className={display}>
                        {/* mi serve perportare la pagina su e chiudere il menu */}
                        <li onClick ={()=>{topFunction();handleClick()}} ><Link to='/' ><a> HOME</a></Link></li>

                    <li><a>IL NOSTRO MENU</a></li>
                    <li onClick={cambiaDisplay}><a> ORDINA ORA</a></li>
                    <li><a href="/"> RISTORANTI</a></li>
                    <li><a href="#contatti">CONTATTI</a></li>
                </ul>
            </div>



        </div >
            <Outlet></Outlet>
        </>

    )

}
export default Navbar;