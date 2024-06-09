import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import '../App.css'

export let selectedCateringGlobal = '';

const Catering = () => {
    const [catering, setCatering] = useState({ value: null, label: 'Choose Option' });
    const navigate = useNavigate();


    const cateringOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    const handleCatering = (selectedOption) => {
        setCatering(selectedOption);
        selectedCateringGlobal = selectedOption.value;
        navigate("/ReserveDate");

    };
console.log(selectedCateringGlobal);
    return (
        <>
            <div className='h-[100vh] gilroyMed flex justify-center items-center bg-custom-bg bg-cover'>
                <div className='md:min-h-[100vh]  flex justify-center items-center w-5/6  '>
                    <div className=''>
                        <div className="flex justify-center">
                            <div className="flex font-bold text-white md:text-5xl text-[2rem] leading-8  h-6 mb-6 md:mb-12 ">Do you want catering</div>
                        </div>
                        <div className="h-[60vh] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 ">
                            {/* 1st */}
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div className="h-[60vh] bg-teal-600 ">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Catering.jpg" alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/30 group-hover:via-black/30 group-hover:to-black/30"></div>
                                <div className="absolute inset-0 flex md:translate-y-[38%] translate-y-[34%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0" onClick={() => handleCatering(cateringOptions[0])}>
                                    <h1 className="font-dmserif md:text-6xl text-4xl font-bold text-black ">Yes</h1>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                                <div className="h-[60vh] bg-red-600 ">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 opacity-50" src="/Catering.jpg" alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/30 group-hover:via-black/30 group-hover:to-black/30"></div>
                                <div className="absolute inset-0 flex md:translate-y-[38%] translate-y-[34%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0" onClick={() => handleCatering(cateringOptions[1])}>
                                    <h1 className="font-dmserif md:text-6xl text-4xl font-bold text-black ">No</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catering
