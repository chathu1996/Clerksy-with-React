import "./Hero.css"
function Hero(){
    return(
        <div className="hero">
            <div className="hero-text-container">
                <div className="hero-text">
                    <h1>Running the show has never been so easy.</h1>
                    <p>Ready to put the human back in HR? Clerksy helps you 
                    set the stage with an inclusive and compliant 
                    workplace.</p>
                </div>
            </div>
            <div className="hero-image-container">
                <img src="/images/hero.svg" alt="" />
            </div>
    </div>
    );
}

export default Hero;