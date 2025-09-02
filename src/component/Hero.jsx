import { MdArrowOutward, MdSlowMotionVideo } from "react-icons/md";
import bgImage from "../assets/heroBgImg.jpeg"

const Hero = () => {
    return (
        <>
            <section 
                className="relative top-20 bg-cover bg-center bg-no-repeat w-full 
                h-[80vh] md:h-[90vh] lg:h-[100vh]" 
                style={{ backgroundImage: `url(${bgImage})` }}
                data-aos="fade-up"
            >
                {/*bg overlay div */}
                <div 
                    className="w-full h-[80vh] md:h-screen lg:h-screen absolute inset-0 bg-black/60 z-10"
                    data-aos="fade-in"
                ></div>

                {/*hero content */}
                <div 
                    className="relative z-20 px-14 py-20 text-white space-y-10"
                    data-aos="fade-up"
                >
                    <h1 
                        className="text-2xl text-center md:text-left md:text-6xl font-semibold tracking-wider leading-snug"
                        data-aos="zoom-in"
                    >
                        Digital & Trusted<br className="hidden md:block"/>
                        Transport Logistic<br className="hidden md:block"/>
                        Company
                    </h1>

                    <p 
                        className="text-center md:text-left text-xs md:text-lg tracking-wider leading-snug font-semibold"
                        data-aos="fade-right"
                    >
                        With Our Commitment excellence dedication customer satisfaction ,<br className="hidden md:block"/>
                        we're here streamline supply chain and drive your business.
                    </p>

                    {/*button */}
                    <div 
                        className="flex flex-col md:flex-row gap-4 items-center md:items-start"
                        data-aos="fade-up"
                    >
                        <button 
                            className="px-6 py-2 md:py-3 font-semibold rounded-md bg-orange-500 hover:bg-orange-400 text-white flex w-fit items-center cursor-pointer"
                            data-aos="zoom-in"
                        >
                            RATE & SHIP<MdArrowOutward className="ml-2" />
                        </button>

                        <button 
                            className="px-6 py-2 md:py-3 font-semibold rounded-md bg-orange-500 hover:bg-orange-400 text-white flex w-fit items-center cursor-pointer"
                            data-aos="zoom-in"
                        >
                            <MdSlowMotionVideo className="text-2xl mr-2" />How it works
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
