import "./Navbar.css"

function Navbar() {

    let LiNavbar = document.getElementsByClassName('LiNavbar')[0]
    function ciccio() {
      console.log("ok")

    }


    return (
        <>
            <div className='navbar'>
                <ul>
                    <div className="hamburger" onClick={ciccio} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="LiNavbar">
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