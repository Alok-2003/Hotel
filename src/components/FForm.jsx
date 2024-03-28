import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const FForm = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        pincode: '',
        whatsappNo: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('src/assets/2.jpg')] bg-cover">
                <div className="backdrop-blur-sm bg-white/30 p-8 rounded-3xl shadow-lg w-1/3">
                    <h2 className="text-4xl font-bold mb-2 text-black">Check details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-lg font-medium text-white">Full Name</label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                        </div>
                        <div className='flex justify-between'>
                            <div className="mb-4 w-5/12">
                                <label htmlFor="city" className="block text-lg font-medium text-white">City</label>
                                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Enter City" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                            <div className="mb-4 w-5/12">
                                <label htmlFor="pincode" className="block text-lg font-medium text-white">Pincode</label>
                                <input type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter Pincode" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="whatsappNo" className="block text-lg font-medium text-white">WhatsApp No</label>
                            <input type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} placeholder="Enter WhatsApp No" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                        </div>
                        <Link to={'/HSearch'}>
                            <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FForm
