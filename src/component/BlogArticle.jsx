import { GoArrowLeft, GoArrowRight, GoArrowUpRight } from "react-icons/go";
import BlogImg1 from "../assets/blogimg1.jpeg"
import BlogImg2 from "../assets/blogimg2.jpeg"
import BlogImg3 from "../assets/blogimg3.jpeg"


const BlogArticle = () => {
    return (
        <>
            <section className="bg-white max-w-6xl mx-auto w-full py-16 px-10">
                {/*heading content*/}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end space-y-4 ">
                    {/*left section*/}
                    <div className="flex flex-col">
                        <h2 className="text-orange-500 font-semibold mb-2 text-xl text-center md:text-left">Blog & Article</h2>
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center md:text-left leading-snug">Get The <span className="text-orange-500">Latest</span> Our News</h1>

                    </div>
                    {/*right section*/}
                    <div className="flex gap-3">
                        <div className="flex bg-[#242254] text-xl text-white p-2 rounded-md cursor-pointer"><GoArrowLeft /></div>
                        <div className="flex bg-[#242254] text-xl text-white p-2 rounded-md cursor-pointer"><GoArrowRight /></div>

                    </div>

                </div>

                {/*Blog section*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-20">
                    {/*Blog 1*/}
                    <div className="w-80 shadow-lg rounded-md">
                        <img className="w-full h-64 object-cover rounded-t-md" src={BlogImg1} alt="BlogImg1" />
                        <div className="px-4 py-6 space-y-2">
                            <p className="text-gray-600">by Admin | 10 May 2025 | Logistic</p>
                            <h1 className="text-[#242254] text-lg md:text-xl font-bold">Optimizing Supply Chain <br className="hidden md:block" />Efficiency</h1>
                            <button className="flex text-orange-500 font-semibold hover:underline underline-offset-2 cursor-pointer">Read More<GoArrowUpRight className="mt-1" /></button>
                        </div>
                    </div>

                    {/*Blog 2*/}
                    <div className="w-80 shadow-lg rounded-md">
                        <img className="w-full h-64 object-cover rounded-t-md" src={BlogImg2} alt="BlogImg1" />
                        <div className="px-4 py-6 space-y-2">
                            <p className="text-gray-600">by Admin | 24 Feb 2025 | Transport</p>
                            <h1 className="text-[#242254] text-lg md:text-xl font-bold">navigating <br className="hidden md:block" />International customer</h1>
                            <button className="flex text-orange-500 font-semibold hover:underline underline-offset-2 cursor-pointer">Read More<GoArrowUpRight className="mt-1" /></button>
                        </div>
                    </div>


                    {/*Blog 3*/}
                    <div className="w-80 shadow-lg rounded-md">
                        <img className="w-full h-64 object-cover rounded-t-md" src={BlogImg3} alt="BlogImg1" />
                        <div className="px-4 py-6 space-y-2">
                            <p className="text-gray-600">by Admin | 10 Jan 2025 | Warehouse</p>
                            <h1 className="text-[#242254] text-lg md:text-xl font-bold">Sustainable Logistic Building <br className="hidden md:block" /> a Greener</h1>
                            <button className="flex text-orange-500 font-semibold hover:underline underline-offset-2 cursor-pointer">Read More<GoArrowUpRight className="mt-1" /></button>
                        </div>
                    </div>

                </div>



            </section>


        </>
    );
};

export default BlogArticle;