import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useNavigate } from 'react-router-dom';

export let reservationDateGlobal = '';

const DateSelector = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const navigate = useNavigate();

    const handleExportData = () => {
        const dates = {
            checkIn: checkIn ? checkIn.format('YYYY-MM-DD') : null,
            checkOut: checkOut ? checkOut.format('YYYY-MM-DD') : null,
        };
        reservationDateGlobal = dates;
        console.log(dates);
        navigate('/Hotels');
    };

    return (
        <div className="bg-custom-bg h-full">
            <div className="flex justify-center">
                <div className="flex justify-between gap-4 pt-24 items-center">
                    <div>
                        <h1 className="text-2xl text-white">Check-In date</h1>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={checkIn}
                                onChange={(newValue) => setCheckIn(newValue)}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <h1 className="text-2xl text-white">Check-Out date</h1>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={checkOut}
                                onChange={(newValue) => setCheckOut(newValue)}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-6">
                <button
                    onClick={handleExportData}
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
            </div>
        </div>
    );
};

export default DateSelector;
