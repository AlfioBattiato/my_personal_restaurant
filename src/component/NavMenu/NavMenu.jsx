import { useState } from 'react';
import './NavMenu.css'
function NavMenu({ tutto, piatti, urakami, cerca }) {

    // function trova() {
    //     let valore = document.querySelector('#gsearch').value;
    //     console.log(valore)
    //     return valore
    // }

    return (
        <>

            <div className='navMenu'>
                <h3>Categoria :</h3>
                <span onClick={tutto}>Tutto</span>
                <span onClick={piatti}>Piatti</span>
                <span onClick={urakami}>Urakami</span>
                <form action="/action_page.php">
                    <input type="search" id="gsearch" name="gsearch" />
                    <input type="button" value='cerca' onClick={cerca} />
                </form>
            </div>

        </>
    )


}

export default NavMenu;