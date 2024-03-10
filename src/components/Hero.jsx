import heroImage from "../assets/hero1.jpeg"

function Hero() {
    return (
        <>
            <main className="hero-container">
                <div className="hero-container-card">
                    <div className="hero-text-container">
                    <h1 className="hero-header">
                            We make recruitment <br />
                            personal, its never just a job
                    </h1>  
                    </div> 
                    <div className="hero-subhead-container">  
                    <p className="hero-subhead">
                        Creating dynamic solutions demands a range of attributes and experience. Working together, we can solve problems faster to achieve collective success and deliver tomorrow&apos;s reality.
                        </p>
                        </div>
                    <div className="hero-buttons">
                        <button>
                            JOB SEEKER
                        </button>
                        <button>
                            EMPLOYER
                        </button>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={heroImage} alt="" className="hero-image"/>
                </div>
            </main>
        </>
    );
}

export default Hero;