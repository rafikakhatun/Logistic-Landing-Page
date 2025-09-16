import GigaByteLogo from "../assets/gigabyteLogo.avif"
import TexasLogo from "../assets/TexasInstruments-Logo.svg.png"
import TangemLogo from "../assets/tangemLogo.png"
import SfExpressLogo from "../assets/sfExpress.png"
import AmazonLogo from "../assets/Amazon-Logo.png"
import GopassLogo from "../assets/goPassLogo.png"

const OurPartner = () => {
    return (
       <section>
        {/*heading section*/}
        <h2>Our Partner</h2>
        <h1>Our Trusted Collaaborators</h1>

        {/*Logo ssection*/}
        <div className="max-w-6xl mx-auto ">
            {/* Logo 1 */}
            <div>
                <img src={GigaByteLogo} alt="Logo" />
            </div>

            {/* Logo 2 */}
            <div>
                <img src={TexasLogo} alt="Logo" />
            </div>

            {/* Logo 3 */}
            <div>
                <img src={TangemLogo} alt="Logo" />
            </div>

            {/* Logo 4 */}
            <div>
                <img src={SfExpressLogo} alt="Logo" />
            </div>

            {/* Logo 5 */}
            <div>
                <img src={AmazonLogo} alt="Logo" />
            </div>

            {/* Logo 6 */}
            <div>
                <img src={GopassLogo} alt="Logo" />
            </div>
        </div>
        
       </section>
    );
};

export default OurPartner;