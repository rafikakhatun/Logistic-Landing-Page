import contactWithUsImg from "../assets/ContactWithUsImg.jpg"

const ContactWithUs = () => {
    return (
        <section>
            <div>
                <img className="w-full h-96 object-center object-cover" src={contactWithUsImg} alt="contactWithUsImg" />
            </div>
        </section>
    );
};

export default ContactWithUs;