import './header.css'
function Header(){
    return(
        <header className='header'>
            <img className='logo' src="/assets/pagesImages/logo.png" alt="logo" />
            <h2 className='name-title'>POKEDEX</h2>
        </header>
    )
}

export default Header