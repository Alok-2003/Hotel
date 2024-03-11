import React from 'react'

const HotelView = () => {
    return (
        <div>
            <main className="container mx-auto px-4 py-6">
                <div className="flex">
                    {/* Image */}
                    <div className="w-1/2">
                        <img
                            className="w-full rounded-lg shadow-md"
                            src="https://images.trvl-media.com/lodging/1000000/530000/523600/523578/f9df586b.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                            alt="Hotel"
                        />
                    </div>

                    {/* Description */}
                    <div className="w-1/2 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Description</h2>
                        <p className="text-gray-600 mt-2">
                            The Manor is a luxury hotel located in the lush area of Friends Colony West, New Delhi. It offers
                            exceptional service and elegant accommodations to ensure a comfortable stay for guests.
                        </p>

                        {/* Amenities */}
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold text-gray-800">Amenities</h2>
                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                <li>Free WiFi</li>
                                <li>24-hour room service</li>
                                <li>Restaurant and bar/lounge</li>
                                <li>Spa and wellness center</li>
                                <li>Swimming pool</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HotelView
