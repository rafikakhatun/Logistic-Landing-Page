import { useEffect } from 'react';
import './App.css'
import Navbar from './component/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import OurService from './component/OurService';
import WhyChooseUs from './component/WhyChooseUs';



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
    <OurService></OurService>
    <WhyChooseUs></WhyChooseUs>
     
    </>
  )
}

export default App
