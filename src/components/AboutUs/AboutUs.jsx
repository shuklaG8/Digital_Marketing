import Image from '../../assets/MainImage.jpg'
import { Link } from 'react-router-dom';
import OurService from '../Service/OurService';

const AboutUs = () => {
    return (
        <>
            <div className="bg-pastelPink p-[100px] relative text-center font-serif">
                <h1 className="text-4xl font-bold text-black mb-1">About <span className="text-pastelYellow">US</span></h1>
                <p className="text-black">Home <span className="text-pastelOrange">/About</span> <span className="text-pastelYellow">Us</span></p>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-10">
                    <div className="w-8 h-8 bg-pastelYellow rounded-full"></div>
                    <div className="w-10 h-10 bg-pastelBlue rounded-full"></div>
                    <div className="w-4 h-10  bg-pastelOrange rounded-tr-md"></div>
                    <div className="w-10 h-10 bg-pastelRed rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-10 px-5 bg-white">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={Image}
                        alt="Online Services Illustration"
                        className="w-full h-full  max-w-lg mx-10"
                    />
                </div>

                <div className="w-full md:w-1/2 mt-8 mr-[100px] md:mt-0 md:pl-10 text-center md:text-left">
                    <div className="text-sm text-yellow-400 mb-2">About Us</div>
                    <h1 className="text-3xl font-bold mb-4">
                        We Are Supporting{' '}
                        <span className="text-pink-500">All Kind Of <br /><span className="text-pastelYellow">Online Services</span></span>{' '}
                        Since 2021
                    </h1>
                    <p className="text-grey-800 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Reuandae ea
                        lusto voluptatibus tenetur. Loque nobis, tempora sit vitae dicta
                        provident loborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus in. At quod quibusdam nulla deleniti dolor amet odio pariatur.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-300 hover:shadow-md hover:shadow-orange-400"
                    >
                        Explore More
                    </Link>
                </div>
            </div>
            <OurService/>
        </>
    );
};

export default AboutUs;

