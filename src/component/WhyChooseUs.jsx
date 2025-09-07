import leftSectionImage from "../assets/chooseUs.jpeg"

const WhyChooseUs = () => {
    return (
        <>

            <section className="bg-white py-12 px-10">
                {/*main container */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                    {/* left section */}
                    <div className="h-full">
                        <img className="w-full h-72 md:w-96 md:h-full object-center rounded-lg hover:transition-transform duration-300 ease-in-out hover:scale-105 shadow-md" src={leftSectionImage} alt="logisticImage" />
                    </div>

                    {/*right section */}
                    <div className="h-full">

                    </div>

                </div>

            </section>


        </>
    );
};

export default WhyChooseUs;