import { VscArrowRight } from "react-icons/vsc";
import WhyChooseVideo from "../assets/ourServiceVideo.mp4"
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import roadServiceImage from "../assets/ourServiceImage1.jpeg"
import airServiceImage from "../assets/ourServiceImage2.jpeg"
import oceanServiceImage from "../assets/ourService3.jpeg"


const WhyChooseUs = () => {
    return (
        <>
            <section className="w-full py-10 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
                    {/*left section */}
                    <div className="space-y-4">
                        <h1 className="text-orange-500 font-semibold mb-2 text-xl text-center md:text-left">Our Service</h1>
                        <p className="text-xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center md:text-left leading-snug">Your <span className="text-orange-600">Gateway </span> to <br className="hidden md:block"/> Seamless <br className="hidden md:block"/> Transportation</p>
                        <p className="text-gray-600 text-sm md:text-lg text-center md:text-left tracking-normal">Whether you're a small business or a multination <br className="hidden md:block"/> corporation, Logintic is your trusted partner for all your <br className="hidden md:block"/> transportation and logistics needs</p>
                        <div className="relative">
                            <video className="w-full h-full rounded-lg" src={WhyChooseVideo} controls autoPlay muted loop playsInline ></video>
                            <div className="absolute w-full h-full rounded-lg inset-0 flex justify-center items-center">
                                <MdOutlineSlowMotionVideo size={36} className="text-orange-600 bg-white rounded-full w-10 h-10" />
                            </div>
                        </div>

                    </div>

                    {/*Right Section*/}
                    <div className="">
                        {/*Road service*/}
                        <div>
                            <img className="w-40 h-25 rounded-md object-cover" src={roadServiceImage} alt="" />
                            <div>
                                <h1>Road Freight Services</h1>
                                <p>Our extensive network of shipping line and experience team ensure smooth</p>
                            </div>
                            <div>
                                <VscArrowRight />
                            </div>
                            {/* Divider line: separates sections */}
                            <div className="border-b border-gray-300 my-4"></div>
                            

                        </div>

                        {/*Air Service*/}
                        <div className="space-y-4">
                            <img src={airServiceImage} alt="" />
                            <div>
                                <h1>Air Freight Services</h1>
                                <p>Our extensive network of shipping line and experience team ensure smooth</p>
                            </div>
                            <div>
                                <VscArrowRight />
                            </div>
                             {/* Divider line: separates sections */}
                            <div className="border-b border-gray-300 my-4"></div>
                        </div>

                        {/*Ocean Service*/}
                        <div>
                            <img src={oceanServiceImage} alt="" />
                            <div>
                                <h1>Ocean Freight Services</h1>
                                <p>Our extensive network of shipping line and experience team ensure smooth</p>
                            </div>
                            <div>
                                <VscArrowRight />
                            </div>
                             {/* Divider line: separates sections */}
                            <div className="border-b border-gray-300 my-4"></div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
};

export default WhyChooseUs;