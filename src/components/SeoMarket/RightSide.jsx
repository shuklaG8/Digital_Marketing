import Sidebar from "./Sidebar";
import MainImage from '../../../public/MainImage.jpg'
import { FaCheck } from "react-icons/fa";
import QnA from "./QnA";

export default function RightSide() {

    const features = [
        "User-Friendly Interface",
        "Role-based access control",
        "API access for seamless integration",
        "Advanced reporting and analytics",
        "Customizable branding options",
        "Start your journey to success"
    ];

    return (
        <div>
            <div className="bg-pastelPink relative p-[100px] text-center font-serif">
                <h1 className="text-4xl font-bold text-black mb-1">SEO <span className="text-pastelYellow">Marketing</span></h1>
                <p className="text-black">Home <span className="text-pastelOrange">/SEO</span> <span className="text-pastelYellow">Marketing</span></p>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-10">
                    <div className="w-8 h-8 bg-pastelYellow rounded-full"></div>
                    <div className="w-10 h-10 bg-pastelBlue rounded-full"></div>
                    <div className="w-4 h-10  bg-pastelOrange rounded-tr-md"></div>
                    <div className="w-10 h-10 bg-pastelRed rounded-full"></div>
                </div>
            </div>
            <div className="flex relative flex-col md:flex-row items-center justify-between py-10 px-5 bg-white">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <Sidebar />
                </div>

                <div className="w-full md:w-2/3 mt-8 mr-[100px] md:mt-0 md:pl-10 text-center md:text-left">
                    <img className="w-[700px] h-[400px]" src={MainImage} alt="" />
                    <p className="text-grey-800 mb-6">
                        SEO Grow Your Business with Our SEO Agency on the search engine results page, This means that when your target customers search for products and services that your industry offers to find your website. <br /><br />
                        {' '}
                        Our approach to SEO is uniquely buit around what we know works.and what we know does not work with over 200 verified factors in play within Googles search algorithm, most agencies will rely on old tactics that no longer work, or guess with new tactics that they hope will stick
                    </p>

                    <div className="bg-white py-16">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer">
                                <div className="text-right">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-end space-x-3 mb-4">
                                            <FaCheck className="h-6 w-6 text-orange-500" />
                                            <span className="text-gray-800 text-lg">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-right">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-end space-x-3 mb-4">
                                            <FaCheck className="h-6 w-6 text-orange-500" />
                                            <span className="text-gray-800 text-lg">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <QnA/>
                </div>
            </div>
        </div>    
    );
};
        
