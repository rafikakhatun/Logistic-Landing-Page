import { IoStar } from "react-icons/io5";
import testimonialImg from "../assets/testimonalImg.jpeg"
import TestimonialPerson from "../assets/testimonialPersonImg.jpeg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Testimonial = () => {
    return (
        <>
            <section className="w-full py-16 px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/*header content*/}
                    <h2 className="text-orange-500 font-semibold mb-2 text-xl text-center ">Testimonial</h2>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center leading-snug">saying people About Our services</h1>

                    {/*container*/}
                    <div className="flex flex-col md:flex-row gap-8 items-center mt-14 ">
                        {/*left content*/}
                        <div className="flex-1">
                            <div className="max-w-sm md:w-full h-auto">
                                <img className="w-full h-full rounded-lg object-cover shadow-lg" src={testimonialImg} alt="testimonialImg" />

                            </div>
                        </div>


                        {/* right content*/}
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img className="w-14 h-14 object-cover rounded-full" src={TestimonialPerson} alt="TestimonialPerson" />
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-700">David malan</span>
                                        <span className="text-sm text-gray-700">Marketing Manager</span>
                                    </div>
                                </div>
                                <div className="flex text-amber-400 text-sm">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>

                            </div>
                            <p className="text-left text-gray-700 leading-relaxed ">
                                "Fast, reliable, and affordable logistics partner.
                                They handled my bulk orders very efficiently with proper care and attention.
                                 Their customer support is very responsive, and real-time tracking keeps me tension-free.
                                  Highly recommended for both small and large businesses who value timely and secure delivery."</p>
                            {/*icon*/}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <div className="bg-orange-600 text-white p-3 rounded-full"><FaArrowLeft /></div>
                                <div className="bg-orange-600 text-white p-3 rounded-full"><FaArrowRight /></div>
                            </div>

                        </div>

                    </div>

                </div>


            </section>
        </>
    );
};

export default Testimonial;