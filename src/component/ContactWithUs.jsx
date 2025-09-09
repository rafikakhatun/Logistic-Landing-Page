import contactWithUsImg from "../assets/ContactWithUsImg.jpg"
import overlayLeftImage1 from "../assets/layer2.png"
import overlayRightImage2 from "../assets/layer1.png"
import overlayRightImage3 from "../assets/layer3.png"
import overlayRightImage4 from "../assets/layer4.png"




const ContactWithUs = () => {
    return (
        <section>
            {/*background image*/}
            <div className="relative">
                <img className="w-full h-96 object-center object-cover" src={contactWithUsImg} alt="contactWithUsImg" />
                {/*overlay div*/}
                <div className=" absolute w-full h-full inset-0 bg-black/50"></div>
                {/*image on overlay*/}
                <div className="absolute inset-0 flex">
                    {/*left overlayRight image */}
                    <img className="w-30 h-20 object-cover top-40" src={overlayLeftImage1} alt="overlayLeftImage" />

                    {/*right overlayRight image 1 */}
                    <img className="w-30 h-20 object-cover" src={overlayRightImage2} alt="overlayRightImage1" />

                    {/*right overlayRight image 2 */}
                    <img className="w-30 h-20 object-cover" src={overlayRightImage3} alt="overlayRightImage2" />

                    {/*right overlayRight image 3 */}
                    <img className="w-30 h-20 object-cover" src={overlayRightImage4} alt="overlayRightImage3" />
                </div>


            </div>
        </section>
    );
};

export default ContactWithUs;