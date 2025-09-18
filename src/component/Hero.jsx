import { MdArrowOutward, MdSlowMotionVideo } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import bgImage1 from "../assets/heroBgImg1.jpeg";
import bgImage2 from "../assets/heroBgImg2.jpeg";
import bgImage3 from "../assets/heroBgImg3.jpeg";
import bgImage4 from "../assets/heroBgImg4.jpeg";

const Hero = () => {
    const images = [bgImage1, bgImage2, bgImage3, bgImage4];

    return (
        <>
            <section className="relative top-20 w-full h-screen md:h-screen lg:h-screen" data-aos="fade-up">
                
                {/* Swiper for background */}
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    effect="fade"
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="w-full h-full absolute inset-0"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="w-full h-full">
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                {/* bg overlay div */}
                                <div className="absolute inset-0 bg-black/50 z-10"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/*hero content*/}
                <div className="absolute inset-0 flex flex-col justify-center z-20 px-6 md:px-14 py-10 md:py-20 text-white space-y-6 md:space-y-10" data-aos="fade-up">
                    <h1 className="text-2xl text-center md:text-left md:text-6xl font-semibold tracking-wider leading-snug" data-aos="zoom-in">
                        Digital & Trusted<br className="hidden md:block"/>
                        Transport Logistic<br className="hidden md:block"/>
                        Company
                    </h1>

                    <p className="text-center md:text-left text-xs md:text-lg tracking-wider leading-snug font-semibold" data-aos="fade-right">
                        With Our Commitment excellence dedication customer satisfaction ,<br className="hidden md:block"/>
                        we're here streamline supply chain and drive your business.
                    </p>

                    {/*button*/}
                    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start" data-aos="fade-up">
                        <button className="px-6 py-2 md:py-3 font-semibold rounded-md bg-orange-500 hover:bg-orange-400 text-white flex w-fit items-center cursor-pointer" data-aos="zoom-in">
                            RATE & SHIP<MdArrowOutward className="ml-2" />
                        </button>

                        <button className="px-6 py-2 md:py-3 font-semibold rounded-md bg-orange-500 hover:bg-orange-400 text-white flex w-fit items-center cursor-pointer" data-aos="zoom-in">
                            <MdSlowMotionVideo className="text-2xl mr-2" />How it works
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
