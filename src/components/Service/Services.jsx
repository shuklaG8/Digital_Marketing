
import Images from '../../../public/Seo1.jpeg'
import Image1 from '../../../public/Content.jpeg'
import Image2 from '../../../public/digital1.jpeg'
import Image3 from '../../../public/email1.jpeg'
import Image4 from '../../../public/marketing1.png'
import Image5 from '../../../public/marketanalysys1.png'

const Services = () => {
    const services = [
        {
            title: 'SEO Marketing',
            description: 'SEO Grow Your Business with Our SEO Agency on the search engine\'s results page. This means that when your target...',
            icon: <img src={Images} className='mx-auto' />,
        },
        {
            title: 'Content Marketing',
            description: 'Content Marketing Business with Our SEO Agency on the search engine\'s results page. This means that when your target...',
            icon: <img src={Image1} />,
        },
        {
            title: 'Digital Marketing',
            description: 'Digital Marketing Business with Our SEO Agency on the search engine\'s results page. This means that when your target...',
            icon: <img src={Image2} />,
        },
        {
            title: 'Email Marketing',
            description: 'Email Marketing Business with Our SEO Agency on the search engine\'s results page. This means that when your target...',
            icon: <img src={Image3} />,
        },
        {
            title: 'Marketing Strategy',
            description: 'Marketing Strategy with Our SEO Agency on the search engine\'s results page. This means that when your target customers...',
            icon: <img src={Image4} />,
        },
        {
            title: 'Market Analysis',
            description: 'Market Analysis Business with Our SEO Agency on the search engine\'s results page. This means that when your target...',
            icon: <img src={Image5} />,
        },
    ];
    return (
        <div>
            {/* <Navbar /> */}
            <div className="bg-pastelPink p-[100px] relative text-center font-serif">
                <h1 className="text-4xl font-bold text-black mb-1">Serv<span className="text-pastelYellow">ice</span></h1>
                <p className="text-black">Home <span className="text-pastelOrange">/Service</span> <span className="text-pastelYellow">Us</span></p>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-10">
                    <div className="w-8 h-8 bg-pastelYellow rounded-full"></div>
                    <div className="w-10 h-10 bg-pastelBlue rounded-full"></div>
                    <div className="w-4 h-10  bg-pastelOrange rounded-tr-md"></div>
                    <div className="w-10 h-10 bg-pastelRed rounded-full"></div>
                </div>
            </div>
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Features Loved Our <span className="text-gradient text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4">Digital Marketing <br /> Services!</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-md hover:shadow-blue-300">

                                <div className="text-2xl flex justify-center items-center mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services