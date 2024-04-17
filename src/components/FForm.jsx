import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { selectedCityGlobal } from './HSearch';
import { selectedEventGlobal } from './Requirement';
import { selectedGatheringGlobal } from './Gatherings';
import { selectedCateringGlobal } from './Catering';

const FForm = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        city: selectedCityGlobal,
        pincode: '',
        whatsappNo: '',
        email: '',
        eventType: selectedEventGlobal, // New field for type of event
        gatheringStrength: selectedGatheringGlobal, // New field for gathering strength
        meal: [] // New field for choose your meal
    });

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const handleMealChange = (e) => {
    //     const { options } = e.target;
    //     const selectedMeals = [];
    //     for (let i = 0; i < options.length; i++) {
    //         if (options[i].selected) {
    //             selectedMeals.push(options[i].value);
    //         }
    //     }
    //     setFormData(prevState => ({
    //         ...prevState,
    //         meal: selectedMeals
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log(formData);
    };
    const cities = [
        'Agra', 'Ahmedabad', 'Ajmer', 'Allahabad', 'Amritsar', 'Aurangabad', 'Bangalore', 'Bhopal', 'Bhubaneswar', 'Chandigarh',
        'Chennai', 'Coimbatore', 'Delhi', 'Faridabad', 'Ghaziabad', 'Goa', 'Gurgaon', 'Guwahati', 'Hyderabad', 'Indore',
        'Jaipur', 'Jalandhar', 'Jammu', 'Jamnagar', 'Jamshedpur', 'Jodhpur', 'Kanpur', 'Kochi', 'Kolkata', 'Lucknow',
        'Ludhiana', 'Madurai', 'Mangalore', 'Mumbai', 'Nagpur', 'Nashik', 'Noida', 'Patna', 'Pune', 'Rajkot',
        'Ranchi', 'Srinagar', 'Surat', 'Thane', 'Thiruvananthapuram', 'Udaipur', 'Vadodara', 'Varanasi', 'Vijayawada', 'Visakhapatnam'
    ];

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('src/assets/2.jpg')] bg-cover">
                <div className="backdrop-blur-sm bg-white/20 p-8 rounded-3xl shadow-lg w-2/3">
                    <h2 className="text-4xl font-bold mb-2 text-black">Verify details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-lg font-medium text-white">Full Name</label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                        </div>
                        <div className="flex justify-between">
                            <div className="mb-4 w-full">
                            <label htmlFor="fullName" className="block text-lg font-medium text-white">City</label>
                                <select id="city" name="city" value={selectedCity} onChange={handleCityChange} className="text-lg mt-1 p-2 border border-gray-300 rounded-md w-full">
                                    <option value="selectedCityGlobal">selectedCityGlobal</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4 w-full mx-4">
                                <label htmlFor="pincode" className="block text-lg font-medium text-white">Pincode</label>
                                <input type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter Pincode" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="whatsappNo" className="block text-lg font-medium text-white">WhatsApp No</label>
                                <input type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} placeholder="Enter WhatsApp No" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between">

                            <div className="mb-4 w-1/2 mr-2">
                                <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                            <div className="mb-4 w-1/2 ml-2">
                                <label htmlFor="gatheringStrength" className="block text-lg font-medium text-white">Gathering Strength</label>
                                <input type="text" id="gatheringStrength" name="gatheringStrength" value={formData.gatheringStrength} onChange={handleChange} placeholder="Enter Gathering Strength" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mb-4 w-1/2 mr-4">
                                <label htmlFor="eventType" className="block text-lg font-medium text-white">Type of Event</label>
                                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="mt-1 p-2.5 border border-gray-300 rounded-md w-full text-lg">
                                    <option value="">Select Type of Event</option>
                                    <option value="Marriage">Marriage</option>
                                    <option value="Birthday Party">Birthday Party</option>
                                    <option value="Party">Party</option>
                                    <option value="Personal Stay">Personal Stay</option>
                                    <option value="Conference">Conference</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </div>

                            <div className="mb-4 w-1/2">
                                <label htmlFor="meal" className="block text-lg font-medium text-white">Choose Your Meal</label>
                                <div className='flex justify-between items-center gap-2 bg-white rounded-lg p-2'>
                                    <label className="inline-flex items-center mt-2">
                                        <input type="radio" name="meal" value="Breakfast" checked={formData.meal === "Breakfast"} onChange={handleChange} className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-black">Breakfast</span>
                                    </label>
                                    <label className="inline-flex items-center mt-2">
                                        <input type="radio" name="meal" value="Lunch" checked={formData.meal === "Lunch"} onChange={handleChange} className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-black">Lunch</span>
                                    </label>
                                    <label className="inline-flex items-center mt-2">
                                        <input type="radio" name="meal" value="Dinner" checked={formData.meal === "Dinner"} onChange={handleChange} className="form-radio h-5 w-5 text-blue-600" /><span className="ml-2 text-black">Dinner</span>
                                    </label>
                                </div>
                            </div>
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

export default FForm;
