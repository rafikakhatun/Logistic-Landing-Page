import OurTeamImg1 from "../assets/ourteam1.jpeg"
import OurTeamImg3 from "../assets/ourteam3.jpeg"
import OurTeamImg2 from "../assets/ourteam2.jpeg"
import OurTeamImg5 from "../assets/ourteam5.jpeg"
import OurTeamImg4 from "../assets/ourteam4.jpeg"
import OurTeamImg6 from "../assets/ourteam6.jpeg"


const Ourteam = () => {
    return (
        <section>
            {/*heading content */}
            <div>
                <div>
                    <h2>Our Team</h2>
                    <h1>Meet Our Dedicated Team</h1>

                </div>
                <div>
                    <p>
                        Get to know the individuals who work tirelessly behind the scenes to ensure that
                        deliver top-notch service to our clients
                    </p>
                </div>
            </div>

            {/*image section*/}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/*image 1*/}
                <div>
                    <img src={OurTeamImg1} alt=""/>
                </div>

                {/*image 2*/}
                <div>
                    <img src={OurTeamImg3} alt=""/>
                </div>

                {/*image 3*/}
                <div>
                    <img src={OurTeamImg2} alt=""/>
                </div>

                {/*image 4*/}
                <div>
                    <img src={OurTeamImg5} alt=""/>
                </div>

                {/*image 5*/}
                <div>
                    <img src={OurTeamImg4} alt=""/>
                </div>

                {/*image 6*/}
                <div>
                    <img src={OurTeamImg6} alt=""/>
                </div>
            </div>





        </section>
    );
};

export default Ourteam;
