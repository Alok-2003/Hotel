import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { toast, Toaster } from "react-hot-toast";

const AdCreate = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        pincode: '',
        whatsappNo: '',
        email: '',
        eventType: '',
        eventStrength: '',
        meal: '',
        images: null,
        rooms: '',
        bedSizeOrCapacity: '',
        roomRates: '',
        freeWifi: false,
        ac: false,
        restaurant: false,
        freeParking: false,
        bar: false,
        audioVisual: '',
        invitationService: '',
        photographyService: '',
        facilities: [] // Initialize facilities as an empty array
    });



    const firebase = useFirebase();

    const [selectedCity, setSelectedCity] = useState('');
    const cities = ['Agra', 'Ahmedabad', 'Ajmer', 'Allahabad', 'Amritsar', 'Aurangabad', 'Bangalore', 'Bhopal', 'Bhubaneswar', 'Chandigarh',
        'Chennai', 'Coimbatore', 'Delhi', 'Faridabad', 'Ghaziabad', 'Goa', 'Gurgaon', 'Guwahati', 'Hyderabad', 'Indore',
        'Jaipur', 'Jalandhar', 'Jammu', 'Jamnagar', 'Jamshedpur', 'Jodhpur', 'Kanpur', 'Kochi', 'Kolkata', 'Lucknow',
        'Ludhiana', 'Madurai', 'Mangalore', 'Mumbai', 'Nagpur', 'Nashik', 'Noida', 'Patna', 'Pune', 'Rajkot',
        'Ranchi', 'Srinagar', 'Surat', 'Thane', 'Thiruvananthapuram', 'Udaipur', 'Vadodara', 'Varanasi', 'Vijayawada', 'Visakhapatnam']; // Replace with your list of cities

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        handleChange(e); // Call handleChange to update the form data
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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
    const handleFacilitiesChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            facilities: checked
                ? [...prevState.facilities, value]
                : prevState.facilities.filter((facility) => facility !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, city, pincode, whatsappNo, email, eventType, eventStrength, meal, images, rooms, bedSizeOrCapacity, roomRates, freeWifi, ac, restaurant, freeParking, bar } = formData;
        const id = Date.now() + Math.floor(Math.random() * 1000);

        // Create an object for facilities based on the selected checkboxes
        const facilities = [];
        if (freeWifi) facilities.push("Free Wifi");
        if (ac) facilities.push("AC");
        if (restaurant) facilities.push("Restaurant");
        if (freeParking) facilities.push("Free Parking");
        if (bar) facilities.push("Bar");
        // Pass all the data to the AddNewHotel function
        await firebase.AddNewHotel(id, fullName, city, pincode, whatsappNo, email, eventType, eventStrength, meal, images, rooms, bedSizeOrCapacity, roomRates, facilities);

        toast.success("Hotel Created Successfully");
        // Clear the form data after submission
        setFormData({
            fullName: '',
            city: '',
            pincode: '',
            whatsappNo: '',
            email: '',
            eventType: '',
            eventStrength: '',
            meal: '',
            images: null,
            rooms: '',
            bedSizeOrCapacity: '',
            roomRates: '',
            freeWifi: false,
            ac: false,
            restaurant: false,
            freeParking: false,
            bar: false
        });
    };



    return (
        <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="min-h-screen flex items-center justify-center bg-black  bg-cover">
                <div className="mt-16 backdrop-blur-sm bg-white/100 p-8 rounded-3xl shadow-lg w-[96%] md:w-10/12 md:mb-14">
                    <h2 className="text-4xl font-bold mb-2 text-black">New Hotel Listing</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Hotel Name and hotel type */}
                        <div className="mb-4 md:grid grid-cols-2 gap-4 h-[72px]">
                            <div className='input flex flex-col' >
                                <label
                                    for="fullName"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                >Hotel Name</label
                                >
                                <input
                                    type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name"
                                    class="hover:border-black input px-[10px] py-[7px] text-[1.4rem]  border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                />
                            </div>



                            <div className="">
                                <label
                                    htmlFor="locationUrl"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                >
                                    Location URL
                                </label>
                                <input
                                    type="text"
                                    id="locationUrl"
                                    name="locationUrl"
                                    value={formData.locationUrl}
                                    onChange={handleChange}
                                    placeholder="Enter Location URL"
                                    className="hover:border-black input px-[10px] py-[7px] text-[1.4rem]  border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                />

                            </div>


                        </div>
                        {/* Location city , Pincode, Location URL */}
                        <div className="mb-4 md:grid grid-cols-3 gap-4 h-[72px]">
                            <div className=''>
                                <label
                                    for="city"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                >City Located</label
                                >
                                {/* <label htmlFor="city" className="block text-lg font-medium text-white">Location</label> */}
                                <select id="city" name="city" value={selectedCity} onChange={handleCityChange} className=" px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg  bg-white hover:border-black hover:border-2">
                                    <option value="">Name of cities</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div >
                            <div className=" ">
                                <label
                                    for="pincode"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                >Pincode
                                </label>
                                {/* <label htmlFor="pincode" className="block text-lg font-medium text-white">Pincode</label> */}
                                <input type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter Pincode" className="hover:border-black input px-[10px] py-[7px] text-[1.4rem]  border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25" />
                            </div>
                            <div className=" ">
                                <label
                                    for="images"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit "
                                >Upload Images
                                </label>
                                {/* <label htmlFor="images" className="block text-lg font-medium text-white">Upload Images</label> */}
                                <div className="flex justify-center items-center w-full bg-white  rounded-md">
                                    <input
                                        type="file"
                                        id="images"
                                        name="images"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                        className=" px-1.5 py-[6.5px]  rounded-md text-lg w-full bg-white border-[2px] border-gray-200 " // Change width to a smaller fraction for centering
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Hotel Contact Email */}
                        <div className="md:grid grid-cols-2 gap-4 ">
                            <div className="mb-4  ">
                                <label
                                    for="whatsappNo"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                >Hotel Contact No
                                </label>
                                {/* <label htmlFor="whatsappNo" className="block text-lg font-medium text-white">Hotel Contact No</label> */}
                                <input type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} placeholder="Enter WhatsApp No" class="hover:border-black input px-[10px] py-[7px] text-[1.4rem]  border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25" />
                            </div>
                            <div className="mb-4 ">
                                <label
                                    for="email"
                                    class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                >Email
                                </label>
                                {/* <label htmlFor="email" className="block text-lg font-medium text-white">Email</label> */}
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" class="hover:border-black input px-[10px] py-[7px] text-[1.4rem]  border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25" />
                            </div>
                        </div>

                        {/* Switch button  */}
                        <div className="w-full flex justify-between items-center">
                            <h1 className='text-[1.7rem] font-bold'>Switch between Rooms and events</h1>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    className="sr-only peer"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)} // Add this handler
                                />
                                <div className="peer rounded-full outline-none duration-100 after:duration-500 w-28 h-10 bg-gray-300 peer-focus:outline-none peer-focus:ring- hover:outline-gray-500 after:content-['R'] after:absolute after:outline-none after:rounded-full after:h-7 after:w-7 after:bg-white after:top-1.5 after:left-2 after:flex after:justify-center after:items-center after:text-black/80 after:font-bold peer-checked:after:translate-x-16 peer-checked:after:content-['E'] peer-checked:after:border-white">
                                </div>
                            </label>
                        </div>

                        {isChecked ? (
                            <div>
                                {/* Content for "E" */}
                                <div className="md:mb-0 md:grid grid-cols-3 gap-4 h-[72px]">
                                    <div>
                                        <label
                                            htmlFor="eventType"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Event Service Provided
                                        </label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2"
                                        >
                                            <option value="">Select Type of Event</option>
                                            <option value="Marriage">Marriage</option>
                                            <option value="Birthday Party">Birthday Party</option>
                                            <option value="Party">Party</option>
                                            <option value="Personal Stay">Personal Stay</option>
                                            <option value="Conference">Conference</option>
                                            <option value="Anniversary">Anniversary</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="eventStrength"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Event Gathering
                                        </label>
                                        <select
                                            id="eventStrength"
                                            name="eventStrength"
                                            value={formData.eventStrength}
                                            onChange={handleChange}
                                            className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2"
                                        >
                                            <option value="">Select the Strength</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="meal"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Catering Service
                                        </label>
                                        <div className='flex justify-evenly items-center gap-2 rounded-lg px-[10px] py-[6px] border border-gray-300 w-full text-lg'>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="meal"
                                                    value="Yes"
                                                    checked={formData.meal === "Yes"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="meal"
                                                    value="No"
                                                    checked={formData.meal === "No"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:mb-0 md:grid grid-cols-3 gap-4 h-[72px]">
                                    <div>
                                        <label
                                            htmlFor="audioVisual"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Audio-visual Equipment
                                        </label>
                                        <div className='flex justify-evenly items-center gap-2 rounded-lg px-[10px] py-[6px] border border-gray-300 w-full text-lg'>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="audioVisual"
                                                    value="Yes"
                                                    checked={formData.audioVisual === "Yes"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="audioVisual"
                                                    value="No"
                                                    checked={formData.audioVisual === "No"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="invitationService"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Invitation Service
                                        </label>
                                        <div className='flex justify-evenly items-center gap-2 rounded-lg px-[10px] py-[6px] border border-gray-300 w-full text-lg'>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="invitationService"
                                                    value="Yes"
                                                    checked={formData.invitationService === "Yes"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="invitationService"
                                                    value="No"
                                                    checked={formData.invitationService === "No"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="photographyService"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Photography Service
                                        </label>
                                        <div className='flex justify-evenly items-center gap-2 rounded-lg px-[10px] py-[6px] border border-gray-300 w-full text-lg'>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="photographyService"
                                                    value="Yes"
                                                    checked={formData.photographyService === "Yes"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center mt-2">
                                                <input
                                                    type="radio"
                                                    name="photographyService"
                                                    value="No"
                                                    checked={formData.photographyService === "No"}
                                                    onChange={handleMealChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="ml-2 text-black">No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="facilities"
                                        className="text-gray-500 text-[1.4rem] font-semibold relative top-5 ml-[9px] px-[3px] bg-white w-fit"
                                    >
                                        Facilities Provided by the Hotel
                                    </label>
                                    <div className="flex justify-evenly text-xl items-center gap-2 rounded-lg p-1.5 mt-1 bg-white border-[2px] border-gray-200">
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Free Wifi"
                                                checked={formData.facilities.includes("Free Wifi")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Free Wifi</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="AC"
                                                checked={formData.facilities.includes("AC")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">AC</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Restaurant"
                                                checked={formData.facilities.includes("Restaurant")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Restaurant</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Free Parking"
                                                checked={formData.facilities.includes("Free Parking")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Free Parking</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Bar"
                                                checked={formData.facilities.includes("Bar")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Bar</span>
                                        </label>
                                        {/* You can add more facilities checkboxes as needed */}
                                    </div>
                                </div>
                            </div>

                        ) : (
                            // Rooms
                            <div>
                                <div className="md:grid grid-cols-3 gap-4 gap-y-0">
                                    <div className="">
                                        <label
                                            htmlFor="roomType"
                                            class="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Room Type
                                        </label>
                                        <select
                                            id="roomType"
                                            name="roomType"
                                            value={formData.roomType}
                                            onChange={handleChange}
                                            className=" px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg  bg-white hover:border-black hover:border-2"
                                        >
                                            <option value="">Select Room Type</option>
                                            <option value="Standard">Standard</option>
                                            <option value="Deluxe">Deluxe</option>
                                            <option value="Suite">Suite</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="rooms"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Rooms Available
                                        </label>
                                        <input
                                            type="number"
                                            id="rooms"
                                            name="rooms"
                                            value={formData.rooms}
                                            onChange={handleChange}
                                            placeholder="Enter Number of Rooms"
                                            className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                        />
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="rooms"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Rooms Area
                                        </label>
                                        <input
                                            type="number"
                                            id="rooms"
                                            name="rooms"
                                            value={formData.rooms}
                                            onChange={handleChange}
                                            placeholder="Enter Number of Rooms"
                                            className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                        />
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="bedSizeOrCapacity"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Bed Size or Capacity
                                        </label>
                                        <select
                                            id="bedSizeOrCapacity"
                                            name="bedSizeOrCapacity"
                                            value={formData.bedSizeOrCapacity}
                                            onChange={handleChange}
                                            className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2"
                                        >
                                            <option value="">Select Bed Size or Capacity</option>
                                            <option value="Single Bed">Single Bed</option>
                                            <option value="Double Bed">Double Bed</option>
                                            <option value="Queen Size Bed">Queen Size Bed</option>
                                            <option value="King Size Bed">King Size Bed</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="roomRates"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Rates of Room per Night
                                        </label>
                                        <input
                                            type="number"
                                            id="roomRates"
                                            name="roomRates"
                                            value={formData.roomRates}
                                            onChange={handleChange}
                                            placeholder="Enter Rates per Night"
                                            className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                        />
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="roomView"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Room View
                                        </label>
                                        <select
                                            id="roomView"
                                            name="roomView"
                                            value={formData.roomView}
                                            onChange={handleChange}
                                            className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2"
                                        >
                                            <option value="">Select Room View</option>
                                            <option value="Ocean View">Ocean View</option>
                                            <option value="City View">City View</option>
                                            <option value="Mountain View">Mountain View</option>
                                            <option value="Garden View">Garden View</option>
                                            <option value="Lake View">Lake View</option>
                                            <option value="River View">River View</option>
                                            <option value="Pool View">Pool View</option>
                                            <option value="Park View">Park View</option>
                                            <option value="Harbor View">Harbor View</option>
                                            <option value="Desert View">Desert View</option>
                                            <option value="Forest View">Forest View</option>
                                            <option value="Golf Course View">Golf Course View</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="numGuests"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Number of Guests Allowed
                                        </label>
                                        <select
                                            id="numGuests"
                                            name="numGuests"
                                            value={formData.numGuests}
                                            onChange={handleChange}
                                            className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2"
                                        >
                                            <option value="">Select Number of Guests</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="mb-4">
                                    <label
                                        htmlFor="facilities"
                                        className="text-gray-500 text-[1.4rem] font-semibold relative top-5 ml-[9px] px-[3px] bg-white w-fit"
                                    >
                                        Facilities Provided by the Hotel
                                    </label>
                                    <div className="flex justify-evenly text-xl items-center gap-2 rounded-lg p-1.5 mt-1 bg-white border-[2px] border-gray-200">
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Free Wifi"
                                                checked={formData.facilities.includes("Free Wifi")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Free Wifi</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="AC"
                                                checked={formData.facilities.includes("AC")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">AC</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Restaurant"
                                                checked={formData.facilities.includes("Restaurant")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Restaurant</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Free Parking"
                                                checked={formData.facilities.includes("Free Parking")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Free Parking</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Bar"
                                                checked={formData.facilities.includes("Bar")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Bar</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Bar"
                                                checked={formData.facilities.includes("Bar")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Laundry Service</span>
                                        </label>
                                        <label className="inline-flex items-center mt-2">
                                            <input
                                                type="checkbox"
                                                name="facilities"
                                                value="Bar"
                                                checked={formData.facilities.includes("Bar")}
                                                onChange={handleFacilitiesChange}
                                                className="form-checkbox h-5 w-5 text-blue-600"
                                            />
                                            <span className="ml-2 text-black">Gyser</span>
                                        </label>
                                        {/* You can add more facilities checkboxes as needed */}
                                    </div>
                                </div>
                            </div>

                        )}


                        {/* Facilities */}
                        <div>


                        </div>

                        <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdCreate;
