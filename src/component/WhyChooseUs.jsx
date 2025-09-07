import { AiOutlineGlobal } from "react-icons/ai";
import leftSectionImage from "../assets/chooseUs.jpeg"
import { PiClockCountdownFill } from "react-icons/pi";

const WhyChooseUs = () => {
    return (
        <>

            <section className="bg-white py-12 px-10">
                {/*main container */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
                    {/* left section */}
                    <div className="h-full">
                        <img className="w-full h-72 md:w-96 md:h-full object-center rounded-lg hover:transition-transform duration-300 ease-in-out hover:scale-105 shadow-md" src={leftSectionImage} alt="logisticImage" />
                    </div>

                    {/*right section */}
                    <div className="h-full space-y-6">
                        <h2 className="text-xl text-center md:text-left text-orange-500 font-semibold">Why Choose Us</h2>
                        <h1 className="text-2xl text-center md:text-left text-[#242254] md:text-4xl font-bold leading-snug tracking-wide">Empowering Your <span className="text-orange-500">Business </span>Potential</h1>
                        <p className="text-center md:text-left text-gray-700">We understand that selecting the right logistic partner is crucial for the success of your business.</p>
                        {/*network and support section */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col items-center md:items-start space-y-2">
                                <AiOutlineGlobal className="text-orange-500 text-2xl md:text-3xl" />
                                <h2 className="text-[#242254] text-lg font-semibold">Global Network</h2>
                                <p className="text-center md:text-left text-gray-700 text-sm">With our global network, we can most remote corners of the globe.</p>
                            </div>

                            <div className="flex flex-col items-center md:items-start space-y-2">
                                <PiClockCountdownFill className="text-orange-500 text-2xl md:text-3xl"/>
                                <h2 className="text-[#242254] text-lg font-semibold">24/7 hours Support</h2>
                                <p className="text-center md:text-left text-gray-700 text-sm">We believe that exceptional customer support is the cornerstone</p>

                            </div>
                        </div>

                    </div>

                </div>

            </section>


        </>
    );
};

export default WhyChooseUs;