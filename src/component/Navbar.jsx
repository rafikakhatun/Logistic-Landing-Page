import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logisticLogo.png"

const Navbar = () => {
    return (
        <>
            <header className="bg-white w-full shadow fixed">
                <nav className="py-2 px-4 flex justify-between items-center">
                    {/* logo */}
                    <img className="w-40 h-16" src={logo} alt="logo" />

                    {/* nav link*/}
                    <ul className="hidden space-x-8 md:flex">
                        <li className="text-orange-600 active:text-orange-500 underline underline-offset-2 cursor-pointer"><a href="#"></a>HOME</li>
                        <li className="text-indigo-900 cursor-pointer"><a href="#"></a>ABOUT US</li>
                        <li className="text-indigo-900 cursor-pointer"><a href="#"></a>SERVICE</li>
                        <li className="text-indigo-900 cursor-pointer"><a href="#"></a>PAGES</li>
                        <li className="text-indigo-900 cursor-pointer"><a href="#">CONTACT</a></li>
                    </ul>

                    {/*button*/}
                    <button className="px-6 py-2 text-white bg-orange-600 rounded-md hidden md:flex">TRAKING</button>
                    {/*humbergur menu icon */}
                    <button className="flex md:hidden"><IoMdMenu className="text-5xl text-orange-500" /></button>
                </nav>
            </header>





        </>
    );
};

export default Navbar;