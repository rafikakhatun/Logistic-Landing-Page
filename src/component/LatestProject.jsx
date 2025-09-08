import latestProjectImg1 from "../assets/latestProjectImg1.jpeg"
import latestProjectImg2 from "../assets/latestProjectImg2.jpeg"
import latestProjectImg3 from "../assets/latestProjectImg3.jpeg"
import latestProjectImg4 from "../assets/latestProjectImg4.jpeg"
import latestProjectImg5 from "../assets/latestProjectImg5.jpeg"
import latestProjectImg6 from "../assets/aboutUs.jpeg"
import { FaArrowRight } from "react-icons/fa"


const LatestProject = () => {
    return (
        <>
            <section className="bg-white w-full py-16 px-6">
                <h2 className="text-orange-500 font-semibold mb-2 text-xl text-center">Latest Project</h2>
                <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center leading-snug">Explore Our <span className="text-orange-500"> Portfolio </span>of Recent<br /> Achievements</h1>

                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-2 mt-10">
                    {/*latestProject Imgae 1*/}
                    <div>
                        <img className=" w-50 h-50 md:w-[420px] md:h-72 rounded-lg object-cover" src={latestProjectImg1} alt="latestProjectImgae" />
                    </div>
                    {/*latestProject Imgae 2*/}
                    <div>
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover" src={latestProjectImg2} alt="latestProjectImgae" />
                    </div>

                    {/*latestProject Imgae 3*/}
                    <div>
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover" src={latestProjectImg3} alt="latestProjectImgae" />
                    </div>

                    {/*latestProject Imgae 4*/}
                    <div>
                        <img className=" w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover" src={latestProjectImg4} alt="latestProjectImgae" />
                    </div>

                    {/*latestProject Imgae 5*/}
                    <div className="relative">
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover" src={latestProjectImg5} alt="latestProjectImgae" />
                        <div className="bg-white absolute top-10 px-10 py-3 rounded-lg shadow-md flex flex-col justify-center items-center">
                            <h2 className="text-lg text-gray-700">Logistic</h2>
                            
                                <span className="flex text-xl text-orange-600 font-semibold">Road Freight Solution
                                    <FaArrowRight className="bg-orange-500 p-4 rounded-full" />
                                </span>
                            

                        </div>
                    </div>

                    {/*latestProject Imgae 6*/}
                    <div>
                        <img className=" w-50 h-50 md:w-96 md:h-72 rounded-lg object-cover" src={latestProjectImg6} alt="latestProjectImgae" />
                    </div>

                </div>
            </section>

        </>
    );
};

export default LatestProject;