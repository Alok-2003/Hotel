import React, { useState } from 'react';

const Calendar = ({ events }) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const [clickedEvent, setClickedEvent] = useState(null);

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfWeek = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const generateDaysArray = () => {
        const totalDays = getDaysInMonth(currentMonth, currentYear);
        return Array.from({ length: totalDays }, (_, i) => i + 1);
    };

    const handleDayClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day);
        const clickedEvent = events.find((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === clickedDate.getDate() && eventDate.getMonth() === clickedDate.getMonth();
        });
        if (clickedEvent) {
            setClickedEvent(clickedEvent); // Assuming you have a state variable to hold the clicked event
        } else {
            setClickedEvent(null); // Reset the clicked event if no event is found
        }
    };

    // In the return statement of your Calendar component


    return (
        <div className="calendar border-8 border-green-500/50 rounded-2xl p-2  md:mx-14">
            <h2 className="text-2xl font-semibold mb-4 md:mx-2">
                {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center md:text-2xl font-semibold">{day}</div>
                ))}
                {[...Array(getFirstDayOfWeek(currentMonth, currentYear)).keys()].map((_, index) => (
                    <div key={`empty-${index}`}></div>
                ))}
                {generateDaysArray().map((day) => (
                    <div
                        key={day}
                        className={`cursor-pointer text-center p-2 text-xl rounded-full ${events.some((event) => {
                            const eventDate = new Date(event.date);
                            return eventDate.getDate() === day && eventDate.getMonth() === currentMonth;
                        }) ? 'bg-blue-500 text-white' : ''
                            }`}
                        onClick={() => handleDayClick(day)}
                    >
                        {day}
                    </div>
                ))}

            </div>
            {clickedEvent && (
                <>
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center">
                        <div className="font-gilroy fixed w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50">
                            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setClickedEvent(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-3xl font-bold">Event:</h2>
                            <h3 className="text-2xl font-semibold my-2">{clickedEvent.eventName}</h3>
                            <p className="text-lg text-gray-600">Date: {clickedEvent.date}</p>
                            {/* Add additional event details here */}
                        </div>
                    </div>
                </>
            )}

        </div>
    );
};

export default Calendar;
