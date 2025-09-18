import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';
import FooterlogoPath from '../assets/footerlogo.png'; // ekhane apnar image path diben

const Footer = () => {
    return (
        <footer className="bg-[#24224C] text-gray-200 py-16 px-10 mt-10">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">

                    {/* Column 1: Logo & Contact */}
                    <div className="space-y-6" data-aos="fade-up">
                        <h2 className="text-3xl font-bold flex items-center" data-aos="zoom-in">
                            <img src={FooterlogoPath} alt="Logistip Logo" className="h-14 w-30 md:h-16" />
                        </h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center" data-aos="fade-right">
                                <div className="bg-orange-500 p-3 rounded-full mr-3 mt-1">
                                    <FiMail className="h-4 w-4 text-white" />
                                </div>
                                <span>info@logistics.com</span>
                            </div>
                            <div className="flex items-center" data-aos="fade-right" data-aos-delay="100">
                                <div className="bg-orange-500 p-3 rounded-full mr-3 mt-1">
                                    <FiMapPin className="h-4 w-4 text-white" />
                                </div>
                                <span>265 New Ave, California City, 1001, USA</span>
                            </div>
                            <div className="flex items-center" data-aos="fade-right" data-aos-delay="200">
                                <div className="bg-orange-500 p-3 rounded-full mr-3 mt-1">
                                    <FiPhone className="h-4 w-4 text-white" />
                                </div>
                                <span>(401) 233 53 567 89</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Our Service */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold mb-4">Our Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li data-aos="fade-right" data-aos-delay="150"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Sea Transport</a></li>
                            <li data-aos="fade-right" data-aos-delay="200"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Warehouse</a></li>
                            <li data-aos="fade-right" data-aos-delay="250"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Air Freight</a></li>
                            <li data-aos="fade-right" data-aos-delay="300"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Local Shipping</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Company */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold mb-4">Our Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li data-aos="fade-right" data-aos-delay="220"><a href="#" className="hover:text-orange-accent transition-colors">&gt; About Us</a></li>
                            <li data-aos="fade-right" data-aos-delay="240"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Our Project</a></li>
                            <li data-aos="fade-right" data-aos-delay="260"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Pricing</a></li>
                            <li data-aos="fade-right" data-aos-delay="280"><a href="#" className="hover:text-orange-accent transition-colors">&gt; Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Stay in touch */}
                    <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-bold">Stay in touch</h3>
                        <p className="text-sm leading-relaxed" data-aos="fade-up" data-aos-delay="350">
                            They've become informed passionate thanks opportunities provided by organization.
                        </p>
                        <div className="flex" data-aos="fade-up" data-aos-delay="400">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-3 rounded-l-lg focus:outline-none bg-white text-gray-700 placeholder-gray-400"
                            />
                            <button className="bg-orange-500 p-3 rounded-r-lg hover:bg-orange-600 transition-colors">
                                <FiArrowRight className="h-6 w-6 text-white" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-4 pt-4" data-aos="fade-up" data-aos-delay="450">
                            <a href="#" className="p-2 rounded-full hover:bg-orange-accent transition-colors"
                                style={{
                                    background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                                }}>
                                <FaInstagram className="h-5 w-5 text-white" />
                            </a>
                            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-orange-accent transition-colors">
                                <FaTwitter className="h-5 w-5 text-white" />
                            </a>
                            <a href="#" className="bg-blue-500 p-2 rounded-full hover:bg-orange-accent transition-colors">
                                <FaFacebookF className="h-5 w-5 text-white" />
                            </a>

                            <a href="#" className="bg-blue-900 p-2.5 rounded-full hover:bg-orange-accent transition-colors">
                                <FaLinkedinIn className="h-5 w-5 text-white" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p>© 2025, Logistip. All Rights Reserved</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
