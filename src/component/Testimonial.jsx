import { IoStar } from "react-icons/io5";
import testimonialImg from "../assets/testimonalImg.jpeg"
import TestimonialPerson from "../assets/testimonialPersonImg.jpeg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Testimonial = () => {
    return (
        <>
            <section className="w-full py-16 px-10 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/*header content*/}
                    <h2 className="text-orange-500 font-semibold mb-2 text-xl text-center ">Testimonial</h2>
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center leading-snug">saying people About Our services</h1>
                    {/*container*/}
                    <div className="flex justify-around flex-col md:flex-row gap-6 items-center">
                        {/*image*/}
                        <div className="w-80 h-80">
                            <img className="w-full h-full rounded-lg object-cover shadow-lg" src={testimonialImg} alt="testimonialImg" />

                        </div>
                        {/* right content*/}
                        <div className="">
                            <div className="flex justify-between items-center">
                                <img className="w-10 h-10 rounded-full" src={TestimonialPerson} alt="TestimonialPerson" />
                                <div className="flex flex-col">
                                    <span>David malan</span>
                                    <span>Marketing Manager</span>
                                </div>
                                <div className="flex text-amber-400">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </div>

                            </div>
                            <p>"Fast, reliable, and affordable logistics partner. They handled my bulk orders very efficiently.
                                Highly recommended for small and large businesses."</p>

                            {/*icon*/}
                            <div>
                                <div><FaArrowLeft /></div>
                                <div><FaArrowRight /></div>
                            </div>

                        </div>

                    </div>

                </div>


            </section>
        </>
    );
};

export default Testimonial;