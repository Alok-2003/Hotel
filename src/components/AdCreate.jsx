import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { toast, Toaster } from "react-hot-toast";

const AdCreate = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        pincode: '',
        whatsappNo: '',
        email: '',
        eventType: '', // New field for type of event
        eventStrength:"",
        meal: '', // New field for choose your meal
        images: null // New field for images
    });

    const firebase = useFirebase();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeMeal = (e) => {
        const { name } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: !prevFormData[name]  // Toggle the value of the checkbox
        }));
    };

    console.log(formData.meal)
    const handleMealChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            meal: value
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files; // Get all selected files
        const imagesArray = Array.from(files); // Convert FileList to array

        // Update state to store the array of selected images
        setFormData(prevState => ({
            ...prevState,
            images: imagesArray
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, city, pincode, whatsappNo, email, eventType,eventStrength, meal, images } = formData;
        await firebase.AddNewHotel(fullName, city, pincode, whatsappNo, email, eventType,eventStrength, meal, images);
        toast.success("Hotel Created Succesfully");
        setFormData({
            fullName: '',
            city: '',
            pincode: '',
            whatsappNo: '',
            email: '',
            eventType: '',
            eventStrength: '',
            meal: '',
            images: null
        });
    };

    return (
        <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('src/assets/2.jpg')] bg-cover">
                <div className="backdrop-blur-sm bg-white/20 p-8 rounded-3xl shadow-lg w-2/3">
                    <h2 className="text-4xl font-bold mb-2 text-black">New Hotel Listing</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-lg font-medium text-white">Hotel Name</label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                        </div>
                        <div className="flex justify-between">
                            <div className="mb-4 w-full">
                                <label htmlFor="city" className="block text-lg font-medium text-white">Location</label>
                                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Enter link" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                            <div className="mb-4 w-full mx-4">
                                <label htmlFor="pincode" className="block text-lg font-medium text-white">Pincode</label>
                                <input type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter Pincode" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="whatsappNo" className="block text-lg font-medium text-white">Hotel Contact No</label>
                                <input type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} placeholder="Enter WhatsApp No" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mb-4 w-1/2 mr-2">
                                <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full text-lg" />
                            </div>
                            <div className="mb-4 w-1/2 ">
                                <label htmlFor="eventStrength" className="block text-lg font-medium text-white">Event Gathering Strength</label>
                                <select id="eventStrength" name="eventStrength" value={formData.eventStrength} onChange={handleChange} className="mt-1 p-2.5 border border-gray-300 rounded-md w-full text-lg">
                                    <option value="">Select the Strength</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mb-4 w-1/2 ">
                                <label htmlFor="eventType" className="block text-lg font-medium text-white">Event Service Provided</label>
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

                            <div className="mb-4 w-1/2 mx-2">
                                <label htmlFor="meal" className="block text-lg font-medium text-black">Catering Service</label>
                                <div className='flex justify-evenly items-center gap-2 bg-white rounded-lg p-1.5 mt-1'>
                                    <label className="inline-flex items-center mt-2">
                                        <input type="radio" name="meal" value="Yes" checked={formData.meal === "Yes"} onChange={handleMealChange} className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2 text-black">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center mt-2">
                                        <input type="radio" name="meal" value="No" checked={formData.meal === "No"} onChange={handleMealChange} className="form-radio h-5 w-5 text-blue-600" />
                                        <span className="ml-2 text-black">No</span>
                                    </label>
                                </div>
                            </div>

                            {/* {formData.meal === "Yes" && (
                                <div className="mb-4 w-1/2 mx-2">
                                    <label htmlFor="options" className="block text-lg font-medium text-black">Meal Options</label>
                                    <div className='flex justify-evenly items-center gap-2 bg-white rounded-lg p-1.5 mt-1'>
                                        <label className="inline-flex items-center mt-2">
                                            <input type="checkbox" name="breakfast" checked={formData.breakfast} onChange={handleChangeMeal} className="form-checkbox h-5 w-5 text-blue-600" />
                                            <span className="ml-2 text-black">Breakfast</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input type="checkbox" name="lunch" checked={formData.lunch} onChange={handleChangeMeal} className="form-checkbox h-5 w-5 text-blue-600" />
                                            <span className="ml-2 text-black">Lunch</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input type="checkbox" name="dinner" checked={formData.dinner} onChange={handleChangeMeal} className="form-checkbox h-5 w-5 text-blue-600" />
                                            <span className="ml-2 text-black">Dinner</span>
                                        </label>
                                    </div>
                                </div>
                            )} */}


                        </div>
                            <div className="mb-4">
                                <label htmlFor="images" className="block text-lg font-medium text-white">Upload Images</label>
                                <input type="file" id="images" name="images" accept="image/*" multiple onChange={handleImageChange} className="mt-1 px-1.5 py-1 border border-gray-300 rounded-md w-full text-lg" />
                            </div>

                        {/* <Link to={'/HSearch'}> */}
                        <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdCreate;
