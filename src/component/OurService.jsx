import { VscArrowRight } from "react-icons/vsc";
import WhyChooseVideo from "../assets/ourServiceVideo.mp4"
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import roadServiceImage from "../assets/ourServiceImage1.jpeg"
import airServiceImage from "../assets/ourServiceImage2.jpeg"
import oceanServiceImage from "../assets/ourService3.jpeg"


const OurService = () => {
    return (
        <>
            <section className="w-full py-10 px-6 bg-white" data-aos="fade-up">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center" data-aos="fade-up">

                    {/*left section */}
                    <div className="space-y-4 h-full" data-aos="fade-right">
                        <h1 className="text-orange-500 font-semibold mb-2 text-xl text-center md:text-left" data-aos="zoom-in">
                            Our Service
                        </h1>
                        <p className="text-xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center md:text-left leading-snug" data-aos="fade-up">
                            Your <span className="text-orange-600">Gateway </span> to <br className="hidden md:block" /> Seamless <br className="hidden md:block" /> Transportation
                        </p>
                        <p className="text-gray-600 text-sm md:text-lg text-center md:text-left tracking-normal" data-aos="fade-up" data-aos-delay="100">
                            Whether you're a small business or a multination <br className="hidden md:block" /> corporation, Logintic is your trusted partner for all your <br className="hidden md:block" /> transportation and logistics needs
                        </p>
                        <div className="relative" data-aos="zoom-in">
                            <video className="w-full h-full rounded-lg" src={WhyChooseVideo} controls autoPlay muted loop playsInline ></video>
                            <div className="absolute w-full h-full rounded-lg inset-0 flex justify-center items-center" data-aos="zoom-in">
                                <MdOutlineSlowMotionVideo size={36} className="text-orange-600 bg-white rounded-full w-10 h-10" />
                            </div>
                        </div>
                    </div>

                    {/*Right Section*/}
                    <div className="space-y-10 h-full" data-aos="fade-left">
                        {/*Road service*/}
                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center" data-aos="fade-up">
                            <div className="transition-transform duration-300 ease-in-out 
                             hover:scale-110 shadow-md w-full md:w-2/3 rounded-md">
                                <img className="w-full h-full md:w-50 md:h-35 rounded-md object-cover shadow-md" src={roadServiceImage} alt="" data-aos="zoom-in" />
                            </div>
                            <div className="flex flex-col" data-aos="fade-left">
                                <h1 className="text-lg text-[#242254] font-semibold tracking-wide" data-aos="fade-up">Road Freight Services</h1>
                                <p className="text-sm text-gray-700 tracking-wide" data-aos="fade-up" data-aos-delay="100">Our extensive network of shipping line and experience team ensure smooth.....</p>
                            </div>
                            <div className="p-2 rounded-full bg-gray-200 flex justify-center items-center" data-aos="zoom-in">
                                <VscArrowRight className="text-gray-600" />
                            </div>
                        </div>
                        {/* Divider line */}
                        <div className="border-b border-gray-300 my-8" data-aos="fade-left"></div>

                        {/*Air Service*/}
                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mt-4" data-aos="fade-up">
                            <div className="transition-transform duration-300 ease-in-out 
                              hover:scale-110 shadow-md w-full md:w-2/3 rounded-md">
                                <img className="w-full h-full md:w-50 md:h-35 rounded-md object-cover" src={airServiceImage} alt="" data-aos="zoom-in" />
                            </div>
                            <div data-aos="fade-left">
                                <h1 className="text-lg text-[#242254] font-semibold tracking-wide" data-aos="fade-up">Air Freight Services</h1>
                                <p className="text-sm text-gray-700 tracking-wide" data-aos="fade-up" data-aos-delay="100">Our extensive network of shipping line and experience team ensure smooth.....</p>
                            </div>
                            <div className="p-2 rounded-full bg-gray-200 flex justify-center items-center" data-aos="zoom-in">
                                <VscArrowRight className="text-gray-600" />
                            </div>
                        </div>
                        {/* Divider line */}
                        <div className="border-b border-gray-300 my-8" data-aos="fade-left"></div>

                        {/*Ocean Service*/}
                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mt-4" data-aos="fade-up">
                            <div className="transition-transform duration-300 ease-in-out 
                               hover:scale-110 shadow-md w-full md:w-2/3 rounded-md">
                                <img className="w-full h-full md:w-50 md:h-35 rounded-md object-cover" src={oceanServiceImage} alt="" data-aos="zoom-in" />
                            </div>
                            <div data-aos="fade-left">
                                <h1 className="text-lg text-[#242254] font-semibold tracking-wide" data-aos="fade-up">Ocean Freight Services</h1>
                                <p className="text-sm text-gray-700 tracking-wide" data-aos="fade-up" data-aos-delay="100">Our extensive network of shipping line and experience team ensure smooth.....</p>
                            </div>
                            <div className="p-2 rounded-full bg-gray-200 flex justify-center items-center" data-aos="zoom-in">
                                <VscArrowRight className="text-gray-600" />
                            </div>
                        </div>
                        {/* Divider line */}
                        <div className="border-b border-gray-300 my-4" data-aos="fade-left"></div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default OurService;
