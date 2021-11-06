import "./Header.css"

function Header() {
    return(
        <div className="navbar">
            <div className="navbar-loo">
                <img src="/images/logo.svg" alt="" />
            </div>
            <div className="navbar-links">
                <div>Log-In</div>
                <div>844-332-6440</div>
                <button className="getstarted-button">Get Started</button>
            </div>
            
        </div>
    );
}

export default Header;