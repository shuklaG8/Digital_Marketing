import { HiOutlineMegaphone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { FaCommentDots } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Testimonial from "../Testimonials/Testimonial";

function OurService() {

    const services = [
        {
            title: 'Digital Branding',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <HiOutlineMegaphone />,
        },
        {
            title: 'Email Marketing',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <HiOutlineMail />,
        },
        {
            title: 'Content Marketing',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <HiOutlinePencilAlt />,
        },
        {
            title: 'Video Marketing',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <HiOutlineVideoCamera />,
        },
        {
            title: 'SEO Service',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <HiOutlineSearchCircle />,
        },
        {
            title: 'Analytics Review',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            icon: <FaCommentDots />,
        },
    ];

    const stats = [
        {
            number: '2,165+',
            label: 'Completed Projects',
            bgColor: 'bg-pink-50',
        },
        {
            number: '1,570+',
            label: 'Worldwide Users',
            bgColor: 'bg-blue-50',
        },
        {
            number: '7+',
            label: 'Years Of Experience',
            bgColor: 'bg-purple-50',
        },
        {
            number: '35+',
            label: 'Award Winner',
            bgColor: 'bg-yellow-50',
        },
    ];


    return (
        <>
            <div className="py-16 bg-pastelPink font-serif">
                <div className="text-center mb-12">
                    <h3 className="text-orange-400 text-sm mb-1">Our Services</h3>
                    <h2 className="text-3xl font-bold">
                        Top Services & <span className="text-pink-500">SEO</span> <span className="text-pastelOrange">Management</span>
                    </h2>
                    <p className="text-gray-900 mt-2">
                        But I must explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born <br /> and I will give you a complete
                        account.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl max-h-2xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white cursor-pointer p-6 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-200"
                        >
                            <div className="text-4xl mb-4 text-orange-400">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-500 mb-4">{service.description}</p>
                            <a
                                href="#"
                                className="text-dark font-semibold inline-flex items-center transform transition-transform duration-300 hover:translate-x-2"
                            >
                                Explore More{' '}
                                <span className="ml-2 inline-block transform transition-transform duration-300 hover:translate-x-2">
                                    <FaArrowRightLong className="text-orange-400" />
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-12 cursor-pointer font-serif bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-tl-3xl rounded-br-3xl ${stat.bgColor} text-center shadow-md hover:shadow-blue-600 `}
                        >
                            <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Testimonial/>
        </>
    )
}

export default OurService