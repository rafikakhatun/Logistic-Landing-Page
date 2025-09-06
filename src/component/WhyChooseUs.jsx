import WhyChooseVideo from "../assets/ourServiceVideo.mp4"

const WhyChooseUs = () => {
    return (
       <>
       <section>
        {/*left section */}
        <div>
            <h1>Our Service</h1>
            <p>Your Gateway to Seamless Transportation</p>
            <p>Whether you're a small business or a multination corporation, Logintic is your trusted partner for all your transportation and logistics needs</p>
            <video src={WhyChooseVideo} controls autoPlay muted loop playsInline></video>

        </div>

        {/*Right Section*/}
        <div>

        </div>
       </section>
       
       </>
    );
};

export default WhyChooseUs;