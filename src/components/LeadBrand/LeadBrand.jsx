
export default function LeadBrand() {

    const brands = [
        { name: 'First Meridian', logo: '../../../public/logo1.jpeg' },
        { name: 'Chambal Fertilisers and Chemicals', logo: '../../../public/logo3.jpeg' },
        { name: 'Forward Parcel', logo: '../../../public/logo2.jpeg' },
        { name: 'Tata Motors Assured', logo: '../../../public/logo4.jpeg' },
        { name: 'Gujarat Tourism', logo: '../../../public/logo5.png' },
        { name: 'Care', logo: '../../../public/logo6.jpeg' },
        { name: 'Ramptoll', logo: '../../../public/logo7.png' },
    ];

    return (
        <div className="min-h-[200px]">
            <div className="py-8 bg-white text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">
                    Trusted by <span className="text-gradient text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4">Leading Brands</span>
                </h2>
                <div className="flex justify-center space-x-20 mt-12 cursor-pointer">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center">
                            <img src={brand.logo} alt={brand.name} className="h-12" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
