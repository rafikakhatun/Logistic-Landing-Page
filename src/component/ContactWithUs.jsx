import contactWithUsImg from "../assets/ContactWithUsImg.jpg"

const ContactWithUs = () => {
    return (
        <section>
            <div className="relative">
                <img className="w-full h-96 object-center object-cover" src={contactWithUsImg} alt="contactWithUsImg" />
                <div className=" absolute w-full h-full inset-0 bg-black/50"></div>
            </div>
        </section>
    );
};

export default ContactWithUs;