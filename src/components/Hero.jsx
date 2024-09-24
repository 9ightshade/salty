import slatyLogo from "../assets/slaty-logo.png"
import heroAside from "../assets/hero-aside-image.png"
import studentGrad from "../assets/student-grad.png"
import book from "../assets/book.png"
import "./Hero.css"
function Hero() {

    return (

        <div style={{
            padding: "3em"
        }}  >

            <div className="hero-section" >

                <div className="top-header">
                    <div className="logo" >
                        <img src={slatyLogo} alt="logo" />
                    </div>

                    <button className="waitlist-btn" >
                        Join the Waitlist
                    </button>
                </div>

                <div className="article-section" >
                    <article>
                        <h1 className="hero-heading" >
                            Experience Better Learning With <span className="slaty" >SLATY.</span>
                        </h1>
                        <p className="hero-paragraph" >
                            Get access to past Question, tutors, courses and solutions all in one place
                        </p>
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Email Address" />
                            <button type="submit" className="waitlist-btn">
                                Join the Waitlist
                            </button>
                        </form>
                    </article>
                    <div className="hero-aside" ><img src={heroAside} alt="" /></div>
                </div>

              


            </div>


            <div className="more-details" >
                <div className="get-connected" >
                    <div className="details-image" >
                        <img src={book} alt="" />
                    </div>
                    <article>
                        <h3>
                            Get connected with Top Tutors
                        </h3>
                        <p>
                            personal tutoring from top tutors matched to meet your needs.
                        </p>
                    </article>
                </div>

                <div className="education-resources" >
                    <div className="details-image" >
                        <img src={studentGrad} alt="" />
                    </div>
                    <article>
                        <h3>
                            The best education Resources
                        </h3>
                        <p>
                            Get past Question, term papers and relevant resouces for your courses.
                        </p>
                    </article>
                </div>
            </div>

        </div>
    )

};

export default Hero;