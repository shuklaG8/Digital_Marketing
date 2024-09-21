import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <div className="">
            <div className="max-w-lg font-serif mt-16 mb-16 mx-auto bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 p-8 rounded-lg shadow-lg hover:shadow-blue-500">
                <h2 className="flex items-center justify-center text-2xl font-bold mb-6">Contact Form </h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email ID</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-orange-400 focus:border-orange-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 hover:bg-orange-300 hover:shadow-md rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
