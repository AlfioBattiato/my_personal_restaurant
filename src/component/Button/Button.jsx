import './Button.css'
function Button({value="",miafunzione}){


    return(<>
    <input className="btn" type="button" value={value} onClick={miafunzione}  />
    
    </>)
}
export default Button;