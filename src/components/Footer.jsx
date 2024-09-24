import footer from "../assets/footer.png"
import "./footer.css"
function Footer() {
    return (

        <div className="footer" >

            <div className="footer-image" >
                <img src={footer} alt="footer image " />
            </div>

            <div className="footer-article" >
                <h2>
                    We give access to <br/>all you need to be <br/> the best!
                </h2>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                    <button type="submit" className="waitlist-btn" >
                        Join the Waitlist
                    </button>
                </form>
            </div>


        </div>

    )
};

export default Footer;