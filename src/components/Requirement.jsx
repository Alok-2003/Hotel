import React from 'react'
import { Link } from 'react-router-dom'

const Requirement = () => {
    return (
        <div className='min-h-[83vh] flex justify-center items-centre'>
            <div className=''>
                <div className="flex justify-center ">
                    <div className="flex font-bold font-[gilroy] text-gray-600 text-5xl leading-8  h-6 mt-8 mb-8">What is your requirement</div>
                </div>
                <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    {/* 1st */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-48 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Marriage.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to='/marriage' className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Marriage</h1>
                            {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                            {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                        </Link>
                    </div>
                    {/* 2nd */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-48 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Birthday.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to='/birthdayParty' className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Birthday Party</h1>
                            {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                            {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button> */}
                        </Link>
                    </div>
                    {/* 3rd */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-48 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Party.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to='/party' className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Party</h1>
                            {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p> */}
                            {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 ">See More</button> */}
                        </Link>
                    </div>
                    {/* 4th */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-48 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Personal_Stay.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to='/personalStay' className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Personal Stay</h1>
                        </Link>
                    </div>
                    {/* 5th */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-48 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/Confrence.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to='/confrence' className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Confrence </h1>
                        </Link>
                    </div>
                    {/* 6th */}
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                        <div className="h-48 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/anniversary.jpg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <Link to='/anniversary' className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">Anniversary</h1>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Requirement
