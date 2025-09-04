import customer1 from "../assets/aboutUsCustomer1.jpeg"
import customer2 from "../assets/aboutUsCustomer2.jpeg"
import customer3 from "../assets/aboutUsCustomer3.jpeg"
import customer4 from "../assets/aboutUsCustomer4.jpeg"

const AboutUs = () => {
    return (
        <section className="py-18 mt-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div>
                    <p className="text-orange-500 font-semibold mb-2 text-xl">About Us</p>

                    <h2 className="text-2xl md:text-4xl font-bold leading-snug tracking-wide mb-4">
                        Delivering Reliable{" "} <br />
                        <span className="text-orange-500">Logistics Solutions Every </span><br />  Time
                    </h2>

                    <p className="text-gray-600 mb-4 text-sm md:text-md">
                        At Logistip, we are more than just a transportation company.
                        We’re your trusted partner in navigating the complexities of
                        logistics and supply chain management.
                    </p>
                    <div className="border-l-2 border-orange-500">
                        <p className="text-gray-600 mb-6 text-sm md:text-md ml-2">
                            25 years of experience in the industry, we have built a reputation
                            for excellence, reliability, and customer service.
                        </p>
                    </div>

                     {/* Button + Customers */}
                    <div className="flex items-center gap-5">
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition cursor-pointer">
                            Contact Us
                        </button>

                        <div className="flex items-center space-x-2">
                            {/* Example Avatars */}
                            <div className="flex -space-x-2">
                                <img
                                    src={customer3}
                                    alt="user1"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src={customer4}
                                    alt="user2"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src={customer1}
                                    alt="user3"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />

                                <img
                                    src={customer2}
                                    alt="user3"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            </div>
                            <span className="text-gray-700 font-medium">
                                60K+ <br />
                                <span className="text-sm text-gray-500">Satisfied Customer</span>
                            </span>
                        </div>
                    </div>



                </div>


            </div>
        </section>
    );
};

export default AboutUs;
