import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import { useParams, useNavigate } from "react-router-dom";// Import useParams hook
import { useFirebase } from '../context/Firebase';
import { toast, Toaster } from "react-hot-toast";

const EditHotel = () => {
    const { hotelId } = useParams(); // Retrieve hotelId from URL parameter
    const firebase = useFirebase();
    const { HotelEdit } = firebase;
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]); // State to store image URLs
    const [hotel, setHotel] = useState(null); // State to store the selected hotel
    const [formData, setFormData] = useState({
        fullName: '',
        CreatorContact: '',
        locationUrl: '',
        city: '',
        bedSizeOrCapacity: '',
        roomsAvail: '',
        roomsArea: '',
        pincode: '',
        email: '',
        roomType: '',
        roomView: '',
        roomRates: '',
        numGuests: '',
        whatsappNo: '',
        EventFacilities: [],
    });
    const [cities, setCities] = useState(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']); // Example city list
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        firebase.listOfHotels().then((hotels) => {
            const filteredHotels = hotels.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(hotel => hotel.id === parseInt(hotelId));

            setHotel(filteredHotels);
            console.log(filteredHotels);

            if (filteredHotels.length > 0) {
                const rawUrls = filteredHotels[0].imageUrls;
                const fetchUrls = rawUrls.map(rawUrl => firebase.getImageURL(rawUrl));

                Promise.all(fetchUrls)
                    .then(urls => setSlides(urls))
                    .catch(error => console.error("Error fetching image URLs:", error));

                // Initialize form data with the hotel data
                setFormData(filteredHotels[0]);
                setSelectedCity(filteredHotels[0].city); // Set the selected city
            }
        });
    }, [firebase, hotelId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        setFormData(prevState => ({
            ...prevState,
            city: e.target.value,
        }));
    };

    const handleFacilitiesChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevState => {
            const EventFacilities = checked
                ? [...prevState.EventFacilities, value]
                : prevState.EventFacilities.filter(facility => facility !== value);

            return {
                ...prevState,
                EventFacilities,
            };
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prevState => ({
            ...prevState,
            images: files,
        }));
    };

    const handleMealChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            meal: value,
        }));
    };

    const handleAudioVisualChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            audioVisual: value,
        }));
    };

    const handleInvitationServiceChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            invitationService: value,
        }));
    };

    const handlePhotographyServiceChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            photographyService: value,
        }));
    };


    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await HotelEdit(hotelId, formData); // Use HotelEdit function from 
            toast.success("Changes done successfully");
            console.log(hotelId)

            setTimeout(() => {
                navigate("/Hotel_table");
            }, 2000);
        } catch (error) {
            console.error("Error updating hotel:", error);
        }
    };
    return (
        <div>
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-64 ml-56 mr-4  w-[40%] md:w-[95%]" : "ml-24 mr-2"
                    } md:w-[81%]  w-[95%] md:mt `}
            >
                <div className="flex">
                        <Toaster className="text-lg" toastOptions={{ duration: 4000 }} />
                    <div className="mt-20 ml-4 mb-4 text-2xl">

                        <h1 className='text-3xl font-bold underline underline-offset-3' >Edit Hotel Details</h1>
                        {hotel && (
                            <div className="mt-2">
                                <form onSubmit={handleSave}>
                                    {/* Hotel Name and Location URL */}
                                    <div className="md:mb-4 md:grid md:grid-cols-2 grid-cols-1 md:gap-4 md:h-[72px]">
                                        <div className='input flex flex-col'>
                                            <label
                                                htmlFor="fullName"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                Hotel Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Enter Full Name"
                                                className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                            />
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="locationUrl"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
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
                                                className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                            />
                                        </div>
                                    </div>

                                    {/* City, Pincode, and Image Upload */}
                                    <div className="md:mb-4 grid md:grid-cols-3 grid-cols-1 md:gap-4 md:h-[72px]">
                                        <div className=''>
                                            <label
                                                htmlFor="city"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                City Located
                                            </label>
                                            <select id="city" name="city" value={selectedCity} onChange={handleCityChange} className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2">
                                                <option value="">Name of cities</option>
                                                {cities.map((city, index) => (
                                                    <option key={index} value={city}>{city}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="pincode"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                Pincode
                                            </label>
                                            <input
                                                type="number"
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                placeholder="Enter Pincode"
                                                className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                            />
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="images"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                Upload Images
                                            </label>
                                            <div className="flex justify-center items-center w-full bg-white rounded-md">
                                                <input
                                                    type="file"
                                                    id="images"
                                                    name="images"
                                                    accept="image/*"
                                                    multiple
                                                    onChange={handleImageChange}
                                                    className="px-1.5 py-[6.5px] rounded-md text-lg w-full bg-white border-[2px] border-gray-200"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hotel Contact and Email */}
                                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                                        <div className="">
                                            <label
                                                htmlFor="whatsappNo"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                Hotel Contact No
                                            </label>
                                            <input
                                                type="text"
                                                id="whatsappNo"
                                                name="whatsappNo"
                                                value={formData.whatsappNo}
                                                onChange={handleChange}
                                                placeholder="Enter WhatsApp No"
                                                className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                            />
                                        </div>
                                        <div className="">
                                            <label
                                                htmlFor="email"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter Email"
                                                className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                            />
                                        </div>
                                    </div>

                                    {/* Facilities Provided */}
                                    <div className="mb-4">
                                        <label
                                            htmlFor="facilities"
                                            className="text-gray-500 text-[1.4rem] font-semibold relative top-5 ml-[9px] px-[3px] bg-white w-fit"
                                        >
                                            Facilities Provided by the Hotel
                                        </label>
                                        <div className="md:flex justify-evenly text-xl items-center gap-2 rounded-lg p-1.5 mt-1 bg-white border-[2px] border-gray-200">
                                            {["Free Wifi", "AC", "Restaurant", "Free Parking", "Bar"].map((facility) => (
                                                <label key={facility} className="inline-flex items-center mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="facilities"
                                                        value={facility}
                                                        checked={formData.EventFacilities && formData.EventFacilities.includes(facility)}
                                                        onChange={handleFacilitiesChange}
                                                        className="form-checkbox h-5 w-5 text-blue-600"
                                                    />
                                                    <span className="ml-2 text-black">{facility}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="md:mb-0 md:grid grid-cols-3 md:gap-4 md:h-[72px]">
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
                                            <div className="">
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
                                        <div className="md:mb-0 md:grid grid-cols-3 md:gap-4 md:h-[72px]">
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
                                                            onChange={handleAudioVisualChange}
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
                                                            onChange={handleAudioVisualChange}
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
                                                            onChange={handleInvitationServiceChange}
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
                                                            onChange={handleInvitationServiceChange}
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
                                                            onChange={handlePhotographyServiceChange}
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
                                                            onChange={handlePhotographyServiceChange}
                                                            className="form-radio h-5 w-5 text-blue-600"
                                                        />
                                                        <span className="ml-2 text-black">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='input flex flex-col'>
                                            <label
                                                htmlFor="specificTheme"
                                                className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                            >
                                                Do you have any specific theme
                                            </label>
                                            <input
                                                type="text"
                                                id="specificTheme"
                                                name="specificTheme"
                                                value={formData.specificTheme}
                                                onChange={handleChange}
                                                placeholder="Write"
                                                className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                            />
                                        </div>
                                    </div>
                                    {/* Room part */}
                                    <div>
                                        <div className="md:grid grid-cols-3 gap-4 gap-y-0">
                                            <div className="">
                                                <label
                                                    htmlFor="roomType"
                                                    className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
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
                                                    htmlFor="roomsAvail"
                                                    className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                                >
                                                    Rooms Available
                                                </label>
                                                <input
                                                    type="number"
                                                    id="roomsAvail"
                                                    name="roomsAvail"
                                                    value={formData.roomsAvail}
                                                    onChange={handleChange}
                                                    placeholder="Enter Number of Rooms"
                                                    className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                                                />
                                            </div>
                                            <div className="">
                                                <label
                                                    htmlFor="roomsArea"
                                                    className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                                                >
                                                    Rooms Area
                                                </label>
                                                <input
                                                    type="number"
                                                    id="roomsArea"
                                                    name="roomsArea"
                                                    value={formData.roomsArea}
                                                    onChange={handleChange}
                                                    placeholder="Enter Room Area"
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
                                            <div className="md:flex justify-evenly text-xl items-center gap-2 rounded-lg p-1.5 mt-1 bg-white border-[2px] border-gray-200">
                                                {["Free Wifi", "AC", "Restaurant", "Free Parking", "Bar"].map((facility) => (
                                                    <label key={facility} className="inline-flex items-center mt-2">
                                                        <input
                                                            type="checkbox"
                                                            name="facilities"
                                                            value={facility}
                                                            checked={formData.EventFacilities && formData.EventFacilities.includes(facility)}
                                                            onChange={handleFacilitiesChange}
                                                            className="form-checkbox h-5 w-5 text-blue-600"
                                                        />
                                                        <span className="ml-2 text-black">{facility}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-blue-500 text- text-xl px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditHotel;
