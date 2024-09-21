import BussinessMan from '../../assets/BussinessMan.png'
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import LeadBrand from '../LeadBrand/LeadBrand';

export default function Testimonial() {
    return (
        <>
        <div className="flex justify-center items-center min-h-screen bg-pastelPink p-4">
            <div className="text-center relative p-8 bg-pastelPink rounded-lg max-w-3xl w-full">
                <h2 className="text-orange-300 text-lg font-semibold mb-2">Testimonials</h2>
                <h1 className="text-3xl font-bold mb-4">
                    Trusted Clients <span className="text-pastelOrange">Feed<span className='text-orange-300'>back</span></span>
                </h1>
                <p className="text-gray-500 mb-6">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.
                </p>
                <div className="relative p-6 h-[260px] bg-pink-50 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:shadow-blue-300">
                    <div className="absolute right-[110px] bottom-[240px] flex items-center justify-center rounded-full bg-white w-10 h-10">
                        <FaQuoteRight className="text-pink-400 text-2xl " />
                    </div>
                    <p className="text-lg mt-4 text-gray-600 mb-4">
                        <h6 className='font-semibold flex justify-center gap-3 font-serif'> <div className="flex items-center justify-center">
                            {[...Array(4)].map((_, index) => (
                                <FaStar key={index} className="w-4 h-4  text-yellow-500" />
                            ))}
                            <FaStarHalfAlt className='w-4 h-4 text-yellow-500' />
                        </div>
                            Service Good!</h6>
                        <p className='mt-2 font-semibold font-serif text-gray-500 '>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                    </p>
                    <div className="flex flex-col relative top-[30px] items-center justify-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden -mb-1">
                            <img
                                src={BussinessMan}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-gray-700 font-bold">Mr. Jonathon Singh</h3>
                            <p className="text-sm text-gray-500">Munko Company, CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LeadBrand/>
        </>
    )
}
