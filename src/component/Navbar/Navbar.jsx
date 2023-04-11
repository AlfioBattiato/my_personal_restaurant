import { useRef,useState } from "react"
import "./Navbar.css"

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



    return (
        <>
            <div className='navbar'>
                <ul>
                    <div className="hamburger" onClick={() => handleClick(display)} >
                        <span className="span1" ref={Span1}></span>
                        <span className="span2" ref={Span2}></span>
                        <span className="span3" ref={Span3}></span>
                    </div>
                    <div className={display}  >
                        <li><a href="/"> ORDINA ORA</a></li>
                        <li><a href="/"> RISTORANTI</a></li>
                        <li><a href="/">CONTATTI</a></li>
                    </div>

                </ul>

            </div>
        </>

    )

}
export default Navbar;