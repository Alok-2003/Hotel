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
            <div className="gilroyMed min-h-screen flex items-center justify-center bg-gray-100 bg-custom-bg bg-cover">
                <Toaster toastOptions={{ duration: 4000 }} />
                <div className="backdrop-blu bg-whit md:p-8 p-4 rounded-3xl shadow-l md:w-2/3 w-[85%] mt-20 md:mb-4 mb-12">
                    <h2 className="text-4xl font-bold mb-3 text-slate-900 underline underline-offset-2">Verify details</h2>
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-2 text-white">{formData.Hotelname}</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="mb-2">
                                <select id="city" name="city" value={formData.city} onChange={handleCityChange} className="text-xl text-slate-900 mt-1 p-2 border border-gray-300 rounded-md w-full ">
                                    <option value="city">City</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-2">
                                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl text-slate-900 ">
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
                                <select id="meal" name="meal" value={formData.meal} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-xl text-slate-900 ">
                                    <option value="">Meal</option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="flex items-center justify-center mb-2">
                                {/* <div className="relative w-full mt-2">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="email" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-2 md-2 md:mt-0">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="gatheringStrength" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-">Gathering Strength</label>
                                    <input type="text" id="gatheringStrength" name="gatheringStrength" value={formData.gatheringStrength} onChange={handleChange} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mb-2">
                            {/* <div className="relative w-full mt-2">
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
                                    
                            </div> */}
                            <div class="block relative w-full">
                                <label htmlFor="fullName" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Full Name</label>
                                <input type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-2">
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="pincode" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Pincode</label>
                                    <input type="number" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="whatsappNo" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Whatsapp No</label>
                                    <input type="text" id="whatsappNo" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-2">
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="adults" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Adults</label>
                                    <input  type="number" id="adults" name="adults" value={formData.adults} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="children" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Children</label>
                                    <input   type="number" id="children" name="children" value={formData.children} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-2">
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="rooms" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Rooms</label>
                                    <input   type="number" id="rooms" name="rooms" value={formData.rooms} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                            <div className=" w-full flex items-center -center gap-10 ">
                                    {/* <input
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
                                    </label> */}

                                    <h1 className="text-2xl mt-6"> Traveling with Pets</h1>
                                    <label
                                        class="relative text-[#008080] flex cursor-pointer items-center justify-center gap-[1em] mt-6"
                                        for="tick"
                                    >

                                        <input class="peer appearance-none" id="tick" name="tick" type="checkbox" />
                                        <span
                                            class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-black"
                                        >
                                        </span>
                                        <svg
                                            viewBox="0 0 69 89"
                                            class="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                                            fill="none"
                                            height="89"
                                            width="69"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                                                stroke-width="10px"
                                                stroke="black"
                                                pathLength="100"
                                            ></path>
                                        </svg>

                                    </label>


                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="checkIn" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Check-In Date</label>
                                    <input   type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* <div className="relative w-full">
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
                                </div> */}
                                <div class="block relative w-full">
                                    <label htmlFor="checkOut" className="block text-slate-900 cursor-text text-lg leading-[140%] font-normal mb-"> Check-Out Date</label>
                                    <input    type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange}
                                        className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="overflow-hidden relative w-32 p-2 h-12 bg-gray-400 text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
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
