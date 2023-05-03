import './NavMenu.css'
function NavMenu ({tutto,piatti,urakami}){

    return(
    <>
    
    <div className='navMenu'>
        <h3>Categoria :</h3>
       <span onClick={tutto}>Tutto</span>
       <span onClick={piatti}>Piatti</span>
       <span onClick={urakami}>Urakami</span>
          
    </div>
    
    </>
    )


}

export default NavMenu;