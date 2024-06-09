import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { selectedCityGlobal } from './HSearch';
import { selectedEventGlobal } from './Requirement';
import { selectedGatheringGlobal } from './Gatherings';
import { selectedCateringGlobal } from './Catering';
import { IntrestedHotel } from './HotelView';
import { useFirebase } from '../context/Firebase';
import { toast, Toaster } from "react-hot-toast";
import { reservationDataGlobal } from './HotelReserveCount';
import { reservationDateGlobal } from './DateSelector';

const FForm = () => {
    const firebase = useFirebase();
    const { getCurrentUser } = useFirebase();
    const currentUser = getCurrentUser();
    const currentPhoneNumber = currentUser.phoneNumber;
    const [profile, setProfile] = useState([]);

    console.log(reservationDataGlobal);
    console.log(reservationDateGlobal);

    const [formData, setFormData] = useState({
        Hotelname: IntrestedHotel,
        fullName: '',
        city: selectedCityGlobal,
        pincode: '',
        whatsappNo: '',
        email: '',
        eventType: selectedEventGlobal,
        gatheringStrength: selectedGatheringGlobal,
        meal: selectedCateringGlobal,
        adults: reservationDataGlobal.adults || 0,
        children: reservationDataGlobal.children || 0,
        rooms: reservationDataGlobal.rooms || 0,
        travelingWithPets: reservationDataGlobal.travelingWithPets || false,
        checkIn: reservationDateGlobal.checkIn || null,
        checkOut: reservationDateGlobal.checkOut || null
    });
    

    useEffect(() => {
        firebase.listOfClient().then((profiles) => {
            const filteredProfile = profiles.docs
                .map(doc => doc.data())
                .filter(profile => profile.contact === currentPhoneNumber);
            setProfile(filteredProfile);
            if (filteredProfile.length > 0) {
                const firstProfile = filteredProfile[0];
                setFormData({
                    ...formData,
                    fullName: firstProfile.name,
                    pincode: firstProfile.pincode,
                    whatsappNo: firstProfile.contact,
                    email: firstProfile.email,
                });
            }
        });
    }, [firebase, currentPhoneNumber]);

    const handleCityChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            city: e.target.value
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await firebase.IntrestedClientForm(
                formData.Hotelname,
                formData.fullName,
                formData.city,
                formData.pincode,
                formData.whatsappNo,
                formData.email,
                formData.eventType,
                formData.meal,
                formData.gatheringStrength,
                formData.adults,
                formData.children,
                formData.rooms,
                formData.travelingWithPets,
                formData.checkIn,
                formData.checkOut
            );
            toast.success("Data Submitted Successfully");
        } catch (error) {
            toast.error("Error submitting data. Please try again later.");
        }
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
            <div className="gilroyMed min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/Background/BG_2.jpg')] bg-cover">
                <Toaster toastOptions={{ duration: 4000 }} />
                <div className="backdrop-blur-sm bg-gray-700/10 md:p-8 p-4 rounded-3xl shadow-lg md:w-2/3 w-[85%] mt-14 md:mb-8 mb-12">
                    <h2 className="text-4xl font-bold mb-3 text-white underline underline-offset-2">Verify details</h2>
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-2 text-white">{formData.Hotelname}</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="mb-2">
                                <select id="city" name="city" value={formData.city} onChange={handleCityChange} className="text-xl text-white mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-900/50">
                                    <option value="city">City</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-2">
                                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl text-white bg-gray-900/50">
                                    <option value="">Select Type of Event</option>
                                    <option value="Marriage">Marriage</option>
                                    <option value="Birthday Party">Birthday Party</option>
                                    <option value="Party">Party</option>
                                    <option value="Personal Stay">Personal Stay</option>
                                    <option value="Conference">Conference</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <select id="meal" name="meal" value={formData.meal} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl text-white bg-gray-900/50">
                                    <option value="">Meal</option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full mt-2">
                                    <input
                                        type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.email && (
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Email
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-2 md:mt-0">
                                <div className="relative w-full">
                                    <input
                                        type="text" id="gatheringStrength" name="gatheringStrength" value={formData.gatheringStrength} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.gatheringStrength && (
                                        <label
                                            htmlFor="gatheringStrength"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Gathering Strength
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mb-2">
                            <div className="relative w-full mt-2">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                />
                                {!formData.fullName && (
                                    <label
                                        htmlFor="fullName"
                                        className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                    >
                                        Name
                                    </label>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.pincode && (
                                        <label
                                            htmlFor="pincode"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Pincode
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.whatsappNo && (
                                        <label
                                            htmlFor="whatsappNo"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            WhatsApp No
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="number" id="adults" name="adults" value={formData.adults} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.adults && (
                                        <label
                                            htmlFor="adults"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Adults
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="number" id="children" name="children" value={formData.children} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.children && (
                                        <label
                                            htmlFor="children"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Children
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="number" id="rooms" name="rooms" value={formData.rooms} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.rooms && (
                                        <label
                                            htmlFor="rooms"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Rooms
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="checkbox" id="travelingWithPets" name="travelingWithPets" checked={formData.travelingWithPets} onChange={(e) => setFormData(prevState => ({
                                            ...prevState,
                                            travelingWithPets: e.target.checked
                                        }))}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    <label
                                        htmlFor="travelingWithPets"
                                        className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                    >
                                        Traveling with Pets
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.checkIn && (
                                        <label
                                            htmlFor="checkIn"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Check-In Date
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full">
                                    <input
                                        type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange}
                                        className="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.checkOut && (
                                        <label
                                            htmlFor="checkOut"
                                            className="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Check-Out Date
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="overflow-hidden relative w-32 p-2 h-12 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
                        >
                            Submit
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                            ></span>
                            <span
                                className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                            ></span>
                            <span
                                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-8 z-10"
                            >Submit</span
                            >
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FForm;
