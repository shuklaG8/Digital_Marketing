import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom';
import RightSide from '../SeoMarket/RightSide';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center py-5 px-2">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    </Link>

                    <div className="flex-grow flex justify-center items-center space-x-1 font-serif font-semibold">
                        <Link to="/" className="py-5 px-3 text-gray-700 hover:text-yellow-500">Home</Link>
                        <Link to="/about" className="py-5 px-3 text-gray-700 hover:text-yellow-500">About Us</Link>
                        <Link to="/pages" onClick={RightSide} className="py-5 px-3 text-gray-700 hover:text-yellow-500">Pages</Link>
                        <Link to="/contact us" className="py-5 px-3 text-gray-700 hover:text-yellow-500">Contact Us</Link>
                        <Link to="/blog" className="py-5 px-3 text-gray-700 hover:text-yellow-500">Blog</Link>
                    </div>

                    <div>
                        <Link to="/" className="px-3 py-2 rounded font-serif text-white bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 hover:bg-gradient-to-br focus:outline-no shadow-lg">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;


