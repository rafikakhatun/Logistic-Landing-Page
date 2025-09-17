import OurTeamImg1 from "../assets/ourteam1.jpeg"
import OurTeamImg3 from "../assets/ourteam3.jpeg"
import OurTeamImg2 from "../assets/ourteam2.jpeg"
import OurTeamImg5 from "../assets/ourteam5.jpeg"
import OurTeamImg4 from "../assets/ourteam4.jpeg"
import OurTeamImg6 from "../assets/ourteam6.jpeg"


const Ourteam = () => {
    return (
        <section className="w-full bg-white py-16 px-6">
            {/*heading content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 py-4">
                {/*left heading*/}
                <div className="space-y-2 md:ml-5">
                    <h2 className="text-orange-500 font-semibold mb-2 text-xl text-center md:text-left" data-aos="fade-down"
                        data-aos-delay="100">Our Team</h2>
                    <h1 className="text-2xl md:text-3xl text-center md:text-left text-orange-500 font-semibold" data-aos="fade-down"
                        data-aos-delay="100">Meet Our <span className="text-[#242254]">Dedicated</span><br className="hidden md:block" /> Team</h1>

                </div>
                {/*right heading*/}
                <div className="md:mr-6">
                    <p className="text-sm md:text-base text-center md:text-right text-gray-600 mt-4 md:mt-0" data-aos="fade-down"
                        data-aos-delay="100">
                        Get to know the individuals who work tirelessly behind the<br className="hidden md:block" /> scenes to ensure that
                        deliver top-notch service to our<br className="hidden md:block" /> clients
                    </p>
                </div>
            </div>

            {/*image section*/}
            <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 place-items-center gap-6 mt-4'>
                {/*image 1*/}
                <div className="relative hover:transition-transform duration-300 ease-in hover:scale-90">
                    <img className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-lg md:ml-10 shadow-lg" src={OurTeamImg1} alt="image" data-aos="fade-up" data-aos-delay="100" />
                    {/*Badge*/}
                    <div className="absolute bottom-6 flex flex-col bg-white ml-3 p-4 md:ml-26 rounded-md" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-orange-500 text-2xl">Meera Thomas</h1>
                        <p className="text-gray-600 text-sm">Supply Chain Manager</p>


                    </div>
                </div>

                {/*image 2*/}
                <div className="hover:transition-transform duration-300 ease-in hover:scale-90">
                    <img className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-lg" src={OurTeamImg3} alt="image" data-aos="fade-up" data-aos-delay="100" />
                </div>

                {/*image 3*/}
                <div className="hover:transition-transform duration-300 ease-in hover:scale-90">
                    <img className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-lg md:mr-10" src={OurTeamImg2} alt="image" data-aos="fade-up" data-aos-delay="100" />
                </div>

                {/*image 4*/}
                <div className="hover:transition-transform duration-300 ease-in hover:scale-90">
                    <img className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-lg md:ml-10" src={OurTeamImg5} alt="image" data-aos="fade-up" data-aos-delay="100" />
                </div>

                {/*image 5*/}
                <div className="hover:transition-transform duration-300 ease-in hover:scale-90">
                    <img className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-lg" src={OurTeamImg6} alt="image" data-aos="fade-up" data-aos-delay="100" />
                </div>
                {/* image 6 */}
                <div className="relative w-fit h-fit hover:transition-transform duration-300 ease-in hover:scale-90 md:mr-10">
                    <img
                        className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-lg"
                        src={OurTeamImg4}
                        alt="image"
                        data-aos="fade-up" data-aos-delay="100"
                    />
                    {/*overlay div*/}
                    <div className="absolute inset-0 bg-blue-900/40 text-white rounded-lg flex flex-col items-center justify-center space-y-3" data-aos="fade-up" data-aos-delay="100">
                        <h1 className="text-2xl md:text-5xl font-semibold">300+</h1>
                        <p className="text-center leading-snug font-semibold">Creative team member in<br className="hidden md:block" /> logistic Company</p>
                        <button className="px-6 py-2 text-white rounded-lg bg-orange-500 cursor-pointer hover:bg-orange-600">Join Our Team</button>

                    </div>
                </div>

            </div>





        </section>
    );
};

export default Ourteam;
