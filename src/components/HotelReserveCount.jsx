import React, { useState } from 'react';

const HotelReserveCount = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [travelingWithPets, setTravelingWithPets] = useState(false);

    const handleIncrement = (setState) => {
        setState((prev) => prev + 1);
    };

    const handleDecrement = (setState) => {
        setState((prev) => Math.max(prev - 1, 0));
    };


    const handlePetsToggle = () => {
        setTravelingWithPets(!travelingWithPets);
    };

    return (
        <div className="bg-gray-100 h-full flex items-center justify-center  p-6 rounded-lg shadow-lg">
            <div className="">
                <div className="flex justify-center items-center mt-20 gap-10">
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-3xl">Adults:</label>
                        <div className="flex">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-l text-2xl"
                                onClick={() => handleDecrement(setAdults)}
                            >
                                -
                            </button>
                            <span className="bg-gray-200 px-6 py-2 text-2xl">{adults}</span>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-r text-2xl"
                                onClick={() => handleIncrement(setAdults)}
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
                                onClick={() => handleDecrement(setChildren)}
                            >
                                -
                            </button>
                            <span className="bg-gray-200 px-6 py-2 text-2xl">{children}</span>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-r text-2xl"
                                onClick={() => handleIncrement(setChildren)}
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
                                onClick={() => handleDecrement(setRooms)}
                            >
                                -
                            </button>
                            <span className="bg-gray-200 px-6 py-2 text-2xl">{rooms}</span>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-1 rounded-r text-2xl"
                                onClick={() => handleIncrement(setRooms)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-2 gap-2">
                    <label className="block text-gray-700 text-xl ">
                        Traveling with Pets:
                    </label>
                    <input
                        type="checkbox"
                        checked={travelingWithPets}
                        onChange={handlePetsToggle}
                        className=" mt- appearance-none w-6 h-6 rounded-xl border-2 border-gray-300 checked:bg-gray-500 checked:border-transparent focus:outline-none "
                    />
                </div>
            </div>
        </div>
    );
};

export default HotelReserveCount;
