import contactWithUsImg from "../assets/ContactWithUsImg.jpg"
import overlayLeftImage1 from "../assets/layer2.png"
import overlayRightImage2 from "../assets/layer1.png"
import overlayRightImage3 from "../assets/layer3.png"
import overlayRightImage4 from "../assets/layer4.png"

const ContactWithUs = () => {
    return (
        <section>
            {/*background image*/}
            <div className="relative">
                <img
                    className="w-full h-96 object-center object-cover"
                    src={contactWithUsImg}
                    alt="contactWithUsImg"
                />
                {/*overlay div*/}
                <div className="absolute w-full h-full inset-0 bg-black/70"></div>
                {/*overlay text and button div */}
                <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-center md:justify-around items-center gap-5 md:gap-0 mr-8 md:mr-0">
                    <h1 className="text-xl md:text-4xl font-semibold text-white" data-aos="fade-left"
                        data-aos-duration="1000">Delivering <span className="text-orange-500">Excellence</span> Your <br/> Premier Transport Agency</h1>
                    <button className="px-6 py-3 rounded-md bg-orange-500 text-white hover:text-orange-600 hover:bg-white hover:border-2 hover:border-orange-600 cursor-pointer" data-aos="fade-right"
                        data-aos-duration="1000">Contact With Us</button>
                </div>

                
                {/*image on overlay*/}
                <div className="absolute inset-0">
                    {/*left overlay image */}
                    <img
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="w-40 h-20 md:w-50 md:h-50 object-center object-cover absolute -bottom-1 md:-bottom-15 -left-5"
                        src={overlayLeftImage1}
                        alt="overlayLeftImage"
                    />

                    {/*right overlay image 1 */}
                    <img
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="w-40 h-20 md:w-40 md:h-30 object-center absolute bottom-2 right-30 md:bottom-2 md:right-40"
                        src={overlayRightImage2}
                        alt="overlayRightImage1"
                    />

                    {/*right overlay image 2 */}
                    <img
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        className="w-40 h-30 md:w-40 md:h-30 object-center absolute bottom-26 -right-1 md:bottom-40 md:right-4"
                        src={overlayRightImage3}
                        alt="overlayRightImage2"
                    />

                    {/*right overlay image 3 */}
                    <img
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        className="w-30 h-20 md:w-40 md:h-30 object-cover absolute bottom-2 right-1 md:-bottom-6"
                        src={overlayRightImage4}
                        alt="overlayRightImage3"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactWithUs;
