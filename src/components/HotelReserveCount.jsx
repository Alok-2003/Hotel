import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export let reservationDataGlobal = '';

const HotelReserveCount = () => {
    const navigate = useNavigate();

    const [reservationData, setReservationData] = useState({
        adults: 0,
        children: 0,
        rooms: 0,
        travelingWithPets: false
    });

    const handleIncrement = (field) => {
        setReservationData((prev) => ({ ...prev, [field]: prev[field] + 1 }));
    };

    const handleDecrement = (field) => {
        setReservationData((prev) => ({ ...prev, [field]: Math.max(prev[field] - 1, 0) }));
    };

    const handlePetsToggle = () => {
        setReservationData((prev) => ({ ...prev, travelingWithPets: !prev.travelingWithPets }));
    };

    const handleExportData = () => {
        reservationDataGlobal=reservationData;
        console.log(reservationData)
        navigate("/ReserveDate");

    };

    return (
        <div className="bg-custom-bg h-full flex items-center justify-center  p-6 rounded-lg shadow-lg">
            <div className="">
                <div className="flex justify-center items-center mt-20 gap-10">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl">Adults:</label>
                        <div className="flex">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-l text-2xl"
                                onClick={() => handleDecrement('adults')}
                            >
                                -
                            </button>
                            <span className="bg-gray-200 px-6 py-2 text-2xl">{reservationData.adults}</span>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-r text-2xl"
                                onClick={() => handleIncrement('adults')}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl">Children:</label>
                        <div className="flex">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-l text-2xl"
                                onClick={() => handleDecrement('children')}
                            >
                                -
                            </button>
                            <span className="bg-gray-200 px-6 py-2 text-2xl">{reservationData.children}</span>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-r text-2xl"
                                onClick={() => handleIncrement('children')}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl">Rooms:</label>
                        <div className="flex">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-l text-2xl"
                                onClick={() => handleDecrement('rooms')}
                            >
                                -
                            </button>
                            <span className="bg-gray-200 px-6 py-2 text-2xl">{reservationData.rooms}</span>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-r text-2xl"
                                onClick={() => handleIncrement('rooms')}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-2 gap-2">
                    <label className="block text-gray-700 text-xl">
                        Traveling with Pets:
                    </label>
                    <input
                        type="checkbox"
                        checked={reservationData.travelingWithPets}
                        onChange={handlePetsToggle}
                        className="mt- appearance-none w-6 h-6 rounded-xl border-2 border-gray-300 checked:bg-gray-500 checked:border-transparent focus:outline-none"
                    />
                </div>

                <div className="flex justify-center items-center mt-6">
                <button
                    onClick={handleExportData}
                    className="overflow-hidden relative w-32 p-2 h-12 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
                >
                    Next
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
                        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-10 z-10"
                    >Next</span
                    >
                </button>
            </div>
            </div>
        </div>
    );
};

export default HotelReserveCount;
