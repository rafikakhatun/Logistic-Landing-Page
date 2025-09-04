

const AboutUs = () => {
    return (
        <section className="py-18 mt-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div>
                    <p className="text-orange-500 font-semibold mb-2 text-xl">About Us</p>

                    <h2 className="text-3xl font-bold leading-snug mb-4">
                        Delivering Reliable{" "}
                        <span className="text-orange-500">Logistics Solutions</span> Every Time
                    </h2>

                    <p className="text-gray-600 mb-4">
                        At Logistip, we are more than just a transportation company.
                        We’re your trusted partner in navigating the complexities of
                        logistics and supply chain management.
                    </p>

                    <p className="text-gray-600 mb-6">
                        25 years of experience in the industry, we have built a reputation
                        for excellence, reliability, and customer service.
                    </p>

                   
                </div>

                
            </div>
        </section>
    );
};

export default AboutUs;
