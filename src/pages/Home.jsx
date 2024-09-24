import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/Why-choose-us";

function Home() {

    return (

        <div style={{
            backgroundColor: "#1f1c2f"
        }} >

            <Hero />
            <WhyChooseUs />
            <Footer/>
        </div>


    )


}

export default Home;