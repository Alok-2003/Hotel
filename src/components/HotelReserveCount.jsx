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
                        className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-2xl"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelReserveCount;
