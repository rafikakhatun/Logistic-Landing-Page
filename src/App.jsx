import { useEffect } from 'react';
import './App.css'
import Navbar from './component/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import OurService from './component/OurService';
import WhyChooseUs from './component/WhyChooseUs';
import LatestProject from './component/LatestProject';
import ContactWithUs from './component/ContactWithUs';
import Ourteam from './component/Ourteam';
import OurPartner from './component/OurPartner';
import BlogArticle from './component/BlogArticle';
import Testimonial from './component/Testimonial';
import RequestQuote from './component/RequestQuote';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      offset: 100, // scroll offset
      once: true,  // animation only once
    });
  }, []);

  return (





    <>

      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <OurService></OurService>
      <LatestProject></LatestProject>
      <ContactWithUs></ContactWithUs>
      <Ourteam></Ourteam>
      <OurPartner></OurPartner>
      <BlogArticle></BlogArticle>
      <Testimonial></Testimonial>
      <RequestQuote></RequestQuote>

    </>
  )
}

export default App
