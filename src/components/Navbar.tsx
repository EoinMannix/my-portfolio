function Navbar() {
    return ( 
        <nav className="navbar">
            <span className="logo"> Eoin Mannix </span>

            <ul className="nav-links">
                <li><a href="#work"> Work </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>

            <a href="#contact" className="nav-btn"> Get in touch </a>
        </nav>
    )
}

export default Navbar