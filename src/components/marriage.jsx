import React from 'react'
import { Link } from 'react-router-dom'

const Marriage = () => {
    return (
        <div className='min-h-[83vh] flex justify-center items-center'>
            <div className='w-4/5 '>
                <div className="flex justify-center ">
                    <div className="flex font-bold text-gray-600 text-5xl leading-8  h-6 mt-8 mb-8">Choose gathering strength</div>
                </div>
                <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    {/* 1st */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-96 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Marriage/Couple.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to="/catering" className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Couple</h1>
                            <h1 className="font-dmserif text-3xl font-bold text-white ">2</h1>
                        </Link>
                    </div>
                    {/* 2nd */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-96 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Marriage/FM.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to="/catering" className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Family Gathering</h1>
                            <h1 className="font-dmserif text-3xl font-bold text-white ">10 to 50</h1>
                        </Link>
                    </div>
                    {/* 3rd */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-96 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Marriage/GC.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to="/catering" className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Large Gathering</h1>
                            <h1 className="font-dmserif text-3xl font-bold text-white ">100+</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marriage
