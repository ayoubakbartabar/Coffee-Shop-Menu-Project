// import 
import './Header.css'

// create function and export default 
export default function Header(props){

    return(
        <div className='header-background-container'>
            <img className='header-image' src={props.background} alt="Back Ground" />
        </div>
    )
}
