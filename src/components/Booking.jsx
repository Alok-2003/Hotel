import React, { useState } from 'react'
import Select from 'react-select';


const Booking = () => {
    const [Requirement, setRequirement] = useState({ value: null, label: 'Choose Option' });
    const [Catering, setCatering] = useState({ value: null, label: 'Choose Option' });
    // Sample country codes options
    const countryCodesOptions = [
        { value: 'Party', label: 'Party' },
        { value: "Conference", label: "Conference" },
        { value: "Marriage", label: "Marriage" },
        { value: "PersonalStay", label: "Personal Stay" },
        { value: 'Anniversary', label: 'Anniversary' },
        { value: 'Birthday', label: 'Birthday' },
        // Add more country code options as needed
    ];
    const CateringOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: "No", label: "No" },

    ];
    const handleRequirement = (selectedOption) => {
        setRequirement(selectedOption);
    };
    const handleCatering = (selectedOption) => {
        setRequirement(selectedOption);
    };
    return (
        <>
            <div className="p-5 w-3/4 font-['gilroy']">
                <div className="mx-4 p-4">
                    <div className="flex items-center text-base font-medium">
                        
                        <div className="flex items-center text-white relative ">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32   uppercase text-teal-600">Requirement</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>

                        <div className="flex items-center text-teal-600 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus ">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32  uppercase text-teal-600">Account</div>
                        </div>

                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        <div className="flex items-center text-gray-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail ">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32   uppercase text-gray-500">Verify</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        <div className="flex items-center text-gray-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-database ">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32   uppercase text-gray-500">Confirm</div>
                        </div>
                    </div>
                </div>
                <div className=" p-4">
                    <div>
                        <div class="flex justify-center">
                            <div className="flex font-bold text-gray-600 text-3xl leading-8 uppercase h-6 mt-4 mb-4">What is your requirement</div>
                        </div>


                        <div class=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {/* 1st */}
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div class="h-48 ">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public\Marriage.jpg" alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div class="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-3xl font-bold text-white ">Marriage</h1>
                                    {/* <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                                    {/* <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                                </div>
                            </div>
                            {/* 2nd */}
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div class="h-48 ">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public\Birthday.jpg" alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div class="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-3xl font-bold text-white ">Birthday Party</h1>
                                    {/* <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                                    {/* <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                                </div>
                            </div>
                            {/* 3rd */}
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div class="h-48 ">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public\Party.jpg" alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div class="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-3xl font-bold text-white ">Party</h1>
                                    {/* <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                                    {/* <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 ">See More</button> */}
                                </div>
                            </div>
                            {/* 4th */}
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div class="h-48 ">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public\Personal_Stay.jpg" alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div class="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-3xl font-bold text-white ">Personal Stay</h1>
                                    {/* <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                                    {/* <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                                </div>
                            </div>
                            {/* 5th */}
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div class="h-48 ">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public\Confrence.jpg" alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div class="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-3xl font-bold text-white ">Confrence </h1>
                                    {/* <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                                    {/* <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                                </div>
                            </div>
                            {/* 6th */}
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div class="h-48 ">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public\anniversary.jpg" alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div class="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-3xl font-bold text-white ">Anniversary</h1>
                                    {/* <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                                    {/* <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 ">See More</button> */}
                                </div>
                            </div>
                        </div>




                        {/* <Select
                            className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Select Country Code"
                            value={Requirement}
                            onChange={handleRequirement}
                            options={countryCodesOptions}
                        /> */}
                        {/* <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Select Catering Service</div>
                        <Select
                            className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Select Country Code"
                            value={Catering}
                            onChange={handleCatering}
                            options={CateringOptions}
                        />
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Strength </div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Number of people stay ." className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="jhon@.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div> */}

                    </div>
                    <div className="flex p-2 mt-4">
                        <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">Previous</button>
                        <div className="flex-auto flex flex-row-reverse">
                            <button className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out 
        border-teal-600 transition">Next</button>
                            <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking
