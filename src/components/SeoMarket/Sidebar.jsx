import { FaLongArrowAltRight } from "react-icons/fa";
// import RightSide from "./RightSide";

const Sidebar = () => {
    const services = [
        'SEO Marketing',
        'Content Marketing',
        'Digital Marketing',
        'Email Marketing',
        'Marketing Strategy',
        'Market Analysis'
    ];

    return (
        <div className="">
            <div className="bg-white p-5 w-64 ml-24">
                <h1 className="font-bold text-xl mb-4 cursor-pointer">All Services</h1>
                {services.map(service => (
                    <div key={service} className="mb-2">
                        <hr />
                        <button className="flex justify-between mb-4 mt-4 items-center text-left w-full font-semibold font-serif text-md hover:text-orange-400">{service}<><FaLongArrowAltRight className="ml-10" /></></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
