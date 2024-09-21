import logo from '../../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#fef3f0] py-10 mt-3">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="mb-8 lg:mb-0 lg:w-1/4">
                        <div className="flex items-center cursor-pointer mb-4">
                            <img src={logo} alt="Chat Logo" className="h-16" />
                        </div>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="mt-4 flex space-x-3">
                            <Link to="https://www.facebook.com/" className="w-10 h-10 flex items-center justify-center rounded-tl-2xl rounded-br-2xl text-white bg-gradient-to-r from-pink-500 to-yellow-500">
                                <FaFacebook />
                            </Link>
                            <Link to="https://www.instagram.com/" className="w-10 h-10 flex items-center justify-center rounded-tl-2xl rounded-br-2xl text-white bg-gradient-to-r from-pink-500 to-yellow-500">
                                <IoLogoInstagram />
                            </Link>
                            <Link to="https://www.linkedIn.com/" className="w-10 h-10 flex items-center justify-center rounded-tl-2xl rounded-br-2xl text-white bg-gradient-to-r from-pink-500 to-yellow-500">
                                <FaLinkedin />
                            </Link>
                            <Link to="https://www.youtube.com/" className="w-10 h-10 flex items-center justify-center rounded-tl-2xl rounded-br-2xl text-white bg-gradient-to-r from-pink-500 to-yellow-500">
                                <FaYoutubeSquare />
                            </Link>
                            <Link to="https://www.twitter.com/" className="w-10 h-10 flex items-center justify-center rounded-tl-2xl rounded-br-2xl text-white bg-gradient-to-r from-pink-500 to-yellow-500">
                                <FaTwitterSquare />
                            </Link>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-0 lg:w-1/4">
                        <h3 className="font-bold font-serif mb-4 cursor-pointer hover:text-gray-600 border-b-2 border-orange-400 w-16 hover:w-[70px] transition-all duration-300">Services</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li><Link to="/">Reports & Analytics</Link></li>
                            <li><Link to="/">Media Promotion</Link></li>
                            <li><Link to="/">Management & Marketing</Link></li>
                            <li><Link to="/">Technical SEO Audit</Link></li>
                            <li><Link to="/">Onsite SEO Service</Link></li>
                            <li><Link to="/">Strategy & Research</Link></li>
                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0 lg:w-1/4">
                        <h3 className="font-bold font-serif mb-4 cursor-pointer hover:text-gray-600 border-b-2 border-orange-400 w-16 hover:w-[80px] transition-all duration-300">Company</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact us">Contact Us</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/">Privacy & Policy</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-1/4 cursor-pointer">
                        <h3 className="font-bold font-serif mb-4 cursor-pointer hover:text-gray-600 border-b-2 border-orange-400 w-16 hover:w-[100px] transition-all duration-300">Community</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li><Link to="/">Podcast</Link></li>
                            <li><Link to="/">Career</Link></li>
                            <li><Link to="/">Webinar & Workshop</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600">
                    <hr />
                    <p className='mt-4 font-serif font-xl'>
                        Full Copyright & Design by <Link to="/" className="text-pink-500">Prism Infoways Pvt Ltd</Link> - 2024
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
