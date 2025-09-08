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

                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 mt-10">
                    {/*latestProject Imgae 1*/}
                    <div>
                        <img className="w-50 h-50 md:w-[430px] md:h-72 rounded-lg object-cover ml-0 md:ml-18" src={latestProjectImg1} alt="latestProjectImgae" />
                    </div>
                    {/*latestProject Imgae 2*/}
                    <div>
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover mr-0 md:ml-22" src={latestProjectImg2} alt="latestProjectImgae" />
                    </div>

                    {/*latestProject Imgae 3*/}
                    <div>
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover ml-0 md:ml-12" src={latestProjectImg3} alt="latestProjectImgae" />
                    </div>

                    {/*latestProject Imgae 4*/}
                    <div>
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover ml-0 md:ml-18" src={latestProjectImg4} alt="latestProjectImgae" />
                    </div>

                    {/*latestProject Imgae 5*/}
                    <div className="relative">
                        <img className="w-50 h-50 md:w-80 md:h-72 rounded-lg object-cover ml-0 md:ml-10" src={latestProjectImg5} alt="latestProjectImgae" />
                        {/* Badge */}
                        <div className="bg-white absolute bottom-4 left-1/2 md:left-50 -translate-x-1/2 w-2/3 mx-auto p-4 rounded-lg shadow-md flex flex-col ">
                            <h2 className="text-lg text-gray-700">Logistic</h2>

                            <p className="flex flex-col md:flex-row text-xl text-orange-600 font-semibold justify-between items-start md:items-center gap-2">
                                <span>Road Freight <br /> Solution</span>
                                <span className="text-white bg-orange-500 rounded-full p-1 md:p-2 flex">
                                    <FaArrowRight />
                                </span>

                            </p>


                        </div>
                    </div>

                    {/*latestProject Imgae 6*/}
                    <div>
                        <img className="w-50 h-50 md:w-[440px] md:h-72 rounded-lg object-cover mr-0 md:mr-6" src={latestProjectImg6} alt="latestProjectImgae" />
                    </div>

                </div>
                {/*view all project button*/}
                <div className="flex justify-center mt-10">
                    <button className="px-6 py-3 rounded-md text-white bg-orange-500">View All Projecct</button>
                </div>
            </section>

        </>
    );
};

export default LatestProject;