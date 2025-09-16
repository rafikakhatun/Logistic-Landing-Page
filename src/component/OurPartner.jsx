import GigaByteLogo from "../assets/Gigabyte-logo-removebg-preview.png"
import TexasLogo from "../assets/TexasInstruments-Logo.svg-removebg-preview (1).png"
import TangemLogo from "../assets/tangemLogo-removebg-preview.png"
import SfExpressLogo from "../assets/sfExpress-removebg-preview.png"
import AmazonLogo from "../assets/Amazon-Logo-removebg-preview.png"
import GopassLogo from "../assets/goPassLogo-removebg-preview.png"

const OurPartner = () => {
    return (
       <section className="w-full py-16 px-6 bg-white">
        {/*heading section*/}
        <h2 className="text-orange-500 font-semibold mb-2 text-xl text-center">Our Partner</h2>
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-[#242254] text-center leading-snug">Our <span className="text-orange-500">Trusted</span> Collaborators</h1>

        {/*Logo ssection*/}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-evenly gap-6 place-items-center mt-14">
            {/* Logo 1 */}
            <div className="w-54 md:w-70 h-36 border border-gray-400 flex justify-center items-center rounded-lg shadow-lg">
                <img className="w-50 h-50" src={GigaByteLogo} alt="Logo" />
            </div>

            {/* Logo 2 */}
            <div className="w-54  md:w-70 h-36 border border-gray-400 flex justify-center items-center rounded-lg shadow-lg">
                <img  className="w-50 h-30" src={TexasLogo} alt="Logo" />
            </div>

            {/* Logo 3 */}
            <div className="w-54 md:w-70 h-36 border border-gray-400 flex justify-center items-center rounded-lg shadow-lg">
                <img  className="w-50 h-30" src={TangemLogo} alt="Logo" />
            </div>

            {/* Logo 4 */}
            <div className="w-54 md:w-70 h-36 border border-gray-400 flex justify-center items-center rounded-lg shadow-lg">
                <img  className="w-50 h-50" src={SfExpressLogo} alt="Logo" />
            </div>

            {/* Logo 5 */}
            <div className="w-54 md:w-70 h-36 border border-gray-400 flex justify-center items-center rounded-lg shadow-lg">
                <img  className="w-50 h-30" src={AmazonLogo} alt="Logo" />
            </div>

            {/* Logo 6 */}
            <div className="w-54 md:w-70 h-36 border border-gray-400 flex justify-center items-center rounded-lg shadow-lg">
                <img  className="w-50 h-30" src={GopassLogo} alt="Logo" />
            </div>
        </div>
        
       </section>
    );
};

export default OurPartner;