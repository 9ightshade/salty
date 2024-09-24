import cash from "../assets/cash.png"
import pen from "../assets/pen.png"
import people from "../assets/people.png"
import "./Why-choose-us.css"
function WhyChooseUs() {


    return (

        <div className="why-choose-us" >
            <h2>
                Why Choose Us?
            </h2>
            <div className="choose-us-flex" >
                <div className="choose-us-details" >
                    <div className="choose-us-details-image" >
                        <img src={ people} alt="learn" />
                    </div>
                    <p>
                        Learn in the SLATY community.
                    </p>
                </div>

                <div className="choose-us-details" >
                    <div className="choose-us-details-image">
                        <img src={pen} alt="learn" />
                    </div>
                    <p>
                        Access to all Academic Courses.
                    </p>
                </div>

                <div className="choose-us-details" >
                    <div className="choose-us-details-image">
                        <img src={cash} alt="learn" />
                    </div>
                    <p>
                        Earn opportunities as a tutor.
                    </p>
                </div>

            </div>

        </div>
    )
};


export default WhyChooseUs;