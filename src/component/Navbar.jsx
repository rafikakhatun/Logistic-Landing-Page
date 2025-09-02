import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logisticLogo.png"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="bg-white w-full shadow fixed" data-aos="fade-down">
                <nav className="py-2 px-4 flex justify-between items-center">
                    {/* logo */}
                    <img className="w-40 h-16" src={logo} alt="logo" data-aos="zoom-in" />

                    {/* desktop menu*/}
                    <ul className="hidden space-x-8 md:flex" data-aos="fade-left">
                        <li className="text-orange-600 active:text-orange-500 underline underline-offset-2 cursor-pointer"  data-aos="fade-down"><a href="#">HOME</a></li>
                        <li className="text-indigo-900 cursor-pointer"  data-aos="fade-down"><a href="#">ABOUT US</a></li>
                        <li className="text-indigo-900 cursor-pointer"  data-aos="fade-down"><a href="#">SERVICE</a></li>
                        <li className="text-indigo-900 cursor-pointer"  data-aos="fade-down"><a href="#">PAGES</a></li>
                        <li className="text-indigo-900 cursor-pointer"  data-aos="fade-down"><a href="#">CONTACT</a></li>
                    </ul>

                    {/* desktop traking button*/}
                    <button className="px-6 py-2 text-white bg-orange-600 rounded-md hidden md:flex cursor-pointer" data-aos="zoom-in">
                        TRAKING
                    </button>

                    {/*humbergur menu icon */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="flex md:hidden cursor-pointer" 
                        data-aos="fade-left"
                    >
                        {isOpen ? (
                            <RxCross2 className="text-5xl text-orange-500" />
                        ) : (
                            <IoMdMenu className="text-5xl text-orange-500" />
                        )}
                    </button>
                </nav>


                {/* mobile menu*/}
                {isOpen && 
                ( <ul
                    className={`w-full h-screen flex flex-col justify-center items-center space-y-4 md:hidden absolute top-16 
                        transition-all duration-500 ease-in-out
                        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
                    `}
                    data-aos="fade-up"
                >
                    <li className="text-orange-600 active:text-orange-500 underline underline-offset-2 cursor-pointer">
                        <a href="#">HOME</a>
                    </li>
                    <li className="text-indigo-900 cursor-pointer hover:underline underline-offset-2">
                        <a href="#">ABOUT US</a>
                    </li>
                    <li className="text-indigo-900 cursor-pointer hover:underline underline-offset-2">
                        <a href="#">SERVICE</a>
                    </li>
                    <li className="text-indigo-900 cursor-pointer hover:underline underline-offset-2">
                        <a href="#">PAGES</a>
                    </li>
                    <li className="text-indigo-900 cursor-pointer hover:underline underline-offset-2">
                        <a href="#">CONTACT</a>
                    </li>

                    {/* mobile traking button*/}
                    <button 
                        className="px-6 py-2 text-white bg-orange-600 hover:bg-orange-500 cursor-pointer rounded-md flex md:hidden"
                        data-aos="zoom-in"
                    >
                        TRAKING
                    </button>
                </ul>)}
               
            </header>
        </>
    );
};

export default Navbar;