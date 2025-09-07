import { AiOutlineGlobal } from "react-icons/ai";
import leftSectionImage from "../assets/chooseUs.jpeg"
import { PiClockCountdownFill } from "react-icons/pi";

const WhyChooseUs = () => {
    return (
        <>

            <section className="bg-white py-16 px-14">
                {/*main container */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
                    {/* left section */}
                    <div className="h-full w-full hover:transition-transform duration-300 ease-in-out hover:scale-105" >
                        <img className="w-full h-72 md:w-2/3 md:h-full object-center rounded-lg shadow-md" src={leftSectionImage} alt="logisticImage" data-aos="fade-right"/>
                    </div>

                    {/*right section */}
                    <div className="h-full space-y-8" data-aos="fade-left">
                        <h2 className="text-xl text-center md:text-left text-orange-500 font-semibold" data-aos="fade-down">Why Choose Us</h2>
                        <h1 className="text-2xl text-center md:text-left text-[#242254] md:text-4xl font-bold leading-snug tracking-wide" data-aos="fade-up">Empowering Your <span className="text-orange-500">Business </span>Potential</h1>
                        <p className="text-center md:text-left text-gray-700" data-aos="fade-up" data-aos-delay="100">We understand that selecting the right logistic partner is crucial for the success of your business.</p>
                        
                        {/*network and support section */}
                        <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center md:items-start space-y-2" data-aos="zoom-in" data-aos-delay="300">
                                <AiOutlineGlobal className="text-orange-500 text-2xl md:text-3xl" />
                                <h2 className="text-[#242254] text-lg font-semibold">Global Network</h2>
                                <p className="text-center md:text-left text-gray-700 text-sm">With our global network, we can most remote corners of the globe.</p>
                            </div>

                            <div className="flex flex-col items-center md:items-start space-y-2" data-aos="zoom-in" data-aos-delay="400">
                                <PiClockCountdownFill className="text-orange-500 text-2xl md:text-3xl"/>
                                <h2 className="text-[#242254] text-lg font-semibold">24/7 hours Support</h2>
                                <p className="text-center md:text-left text-gray-700 text-sm">We believe that exceptional customer support is the cornerstone</p>
                            </div>
                        </div>

                        {/*Reviews card section*/}
                        <div className="flex justify-between flex-col md:flex-row gap-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="p-6 py-3 flex flex-col justify-center items-center shadow-lg border border-gray-100 rounded-lg space-y-2" data-aos="flip-left">
                                <h1 className="text-3xl font-semibold text-orange-600">25K</h1>
                                <p className="text-[#242254] text-lg font-semibold">Logistic Outlets</p>
                            </div>

                            <div className="p-6 py-3 flex flex-col justify-center items-center shadow-lg border border-gray-100 rounded-lg space-y-2" data-aos="flip-left" data-aos-delay="200">
                                <h1 className="text-3xl font-semibold text-orange-600">150+</h1>
                                <p className="text-[#242254] text-lg font-semibold">Countries Service</p>
                            </div>

                            <div className="p-6 py-3 flex flex-col justify-center items-center shadow-lg border border-gray-100 rounded-lg space-y-2" data-aos="flip-left" data-aos-delay="400">
                                <h1 className="text-3xl font-semibold text-orange-600">12 M+</h1>
                                <p className="text-[#242254] text-lg font-semibold">Deliveries</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


        </>
    );
};

export default WhyChooseUs;
