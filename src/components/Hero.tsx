function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">

                <p className="hero-eyebrow">Available for Work</p>

                <h1 className="hero-title">Eoin Mannix</h1>

                <p className="hero-desc">
                    I am a computer science student who enjoys exploring new technologies and innovation.
                </p>

                <div className="hero-buttons">
                    <a href="#work" className="hero-btn">See my Work</a>
                    <a href="#contact" className="hero-link">Get in touch</a>
                </div>
            
            </div>

            <div className="hero-image">
                <img src=".\images\profile image.jpeg" alt="main photo"></img>
            </div>

        </section>
    )
}

export default Hero