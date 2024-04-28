import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { selectedCityGlobal } from './HSearch';
import { selectedEventGlobal } from './Requirement';
import { selectedGatheringGlobal } from './Gatherings';
import { selectedCateringGlobal } from './Catering';
import { IntrestedHotel } from './HotelView';
import { useFirebase } from '../context/Firebase';

const FForm = () => {
    const firebase = useFirebase();
    const { getCurrentUser } = useFirebase();
    const currentUser = getCurrentUser();
    const currentPhoneNumber= currentUser.phoneNumber;
    const [profile, setProfile] = useState([]);


    const [formData, setFormData] = useState({
        fullName: '',
        city: selectedCityGlobal,
        pincode: '',
        whatsappNo: '',
        email: '',
        eventType: selectedEventGlobal,
        gatheringStrength: selectedGatheringGlobal,
        meal: selectedCateringGlobal
    });

    useEffect(() => {
        firebase.listOfClient().then((profiles) => {
            // Filter the profiles based on the currentUser's phoneNumber
            const filteredProfile = profiles.docs
                .map(doc => doc.data())
                .filter(profile => profile.contact === currentPhoneNumber);
            setProfile(filteredProfile);
            // console.log(filteredProfile);
            if (filteredProfile.length > 0) {
                const firstProfile = filteredProfile[0]; // Assuming only one profile is fetched
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
        setSelectedCity(e.target.value);
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
            await firebase.IntrestedClient(
                formData.fullName,
                formData.city,
                formData.pincode,
                formData.whatsappNo,
                formData.email,
                formData.eventType,
                formData.meal,
                formData.gatheringStrength
            );
            console.log("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
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
                <div className="backdrop-blur-sm bg-gray-700/10 md:p-8 p-4 rounded-3xl shadow-lg md:w-2/3 w-[85%] mt-14 md:mb-8 mb-12">
                    <h2 className="text-4xl font-bold mb-3 text-white underline  underline-offset-2">Verify details</h2>
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-2 text-white">{IntrestedHotel}</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="mb-2 ">
                                <select id="city" name="city" value={formData.city} onChange={handleCityChange} className="text-xl text-white mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-900/50">
                                    <option value="city">city</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-2 ">
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

                            <div className="mb-2 ">
                                <select id="meal" name="meal" value={formData.meal} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl text-white bg-gray-900/50">
                                    <option value="">Meal</option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div class="flex items-center justify-center">
                                <div class="relative w-full mt-2">
                                    <input
                                        type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                        class="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.email && (
                                        <label
                                            htmlFor="email"
                                            class="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Email
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div class="flex items-center justify-center mt-2 md:mt-0">
                                <div class="relative w-full ">
                                    <input
                                        type="text" id="gatheringStrength" name="gatheringStrength" value={formData.gatheringStrength} onChange={handleChange}
                                        class="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.gatheringStrength && (
                                        <label
                                            htmlFor="gatheringStrength"
                                            class="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Gathering Strength
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center mb-2">
                            <div class="relative w-full mt-2">
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    class="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                />
                                {!formData.fullName && (
                                    <label
                                        htmlFor="fullName"
                                        class="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                    >
                                        Name
                                    </label>
                                )}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center justify-center">
                                <div class="relative w-full ">
                                    <input
                                        type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange}
                                        class="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.pincode && (
                                        <label
                                            htmlFor="pincode"
                                            class="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            Pincode
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <div class="relative w-full ">
                                    <input
                                        type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange}
                                        class="w-full text-3xl border-b border-gray-300 py-1 focus:border-b-2 focus:border-black transition-colors focus:outline-none peer bg-inherit"
                                    />
                                    {!formData.whatsappNo && (
                                        <label
                                            htmlFor="whatsappNo"
                                            class="absolute left-0 top-2 cursor-text peer-focus:text-lg text-2xl peer-focus:-top-4 transition-all peer-focus:text-black text-white"
                                        >
                                            WhatsApp No
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* <Link to={'/HSearch'}> */}
                            <button
                                type="submit"
                                class="overflow-hidden relative w-32 p-2 h-12 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
                            >
                                Submit
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
                                ></span>
                                <span
                                    class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
                                ></span>
                                <span
                                    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-8 z-10"
                                >Submit</span
                                >
                            </button>

                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FForm;
