import airbnbLogo from '../assets/airbnb-logo.png'

function Navbar(){

    return(
        <nav className='nav-container'>
            <img className='nav-logo' src={airbnbLogo}></img>
        </nav>
    )
}

export default Navbar;