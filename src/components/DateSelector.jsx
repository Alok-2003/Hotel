import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';

const DateSelector = () => {
    const [checkIn, setcheckIn] = useState();
    const [checkOut, setcheckOut] = useState();
    return (
        <>
            <div className="flex justify-center bg-custom-bg h-full">

                <div className="flex justify-between items-center w-6/12">

                    <div className="pt-10  ">
                        <h1 className='ml- text-2xl text-white' >Check-In date</h1>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                orientation="portrait"
                                openTo='day'
                                value={checkIn}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="pt-10 w-">
                        <h1 className='ml- text-2xl text-white' >Check-Out date</h1>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                orientation="portrait"
                                openTo='day'
                                value={checkIn}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DateSelector