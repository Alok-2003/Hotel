// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FiAlignRight } from "react-icons/fi";

const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const content = (
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
            <ul  className="text-centre text-xl px-8 py-0">
                <Link to={"hotels"} spy={true} smooth={true} >
                    <li className="my-3 py-3 border-b border-slate-800 hover:rounded">Hotel</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-3 py-3 border-b border-slate-800 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-3 py-3 border-b border-slate-800 hover:rounded">Login</li>
                </Link>
            </ul >
        </div>
    );

    return (
        <nav className="z-50">
            <div className="font-[gilroy] h-16 flex justify-between z-50 text-white lg:py-5 px-6 py-4  fixed w-full">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold "> Hotel Hub</span>
                </div>
                <div className=" md:flex md:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[20px]">
                            <Link to={"hotels"} >
                                <li className="hover:text-fuchsia-600 transition   hover:border-fuchsia-600 cursor-pointer">Hotel</li>
                            </Link>
                            <Link spy={true} smooth={true}>
                                <li className="hover:text-fuchsia-600 transition   hover:border-fuchsia-600 cursor-pointer">About</li>
                            </Link>
                            <Link to={"/"} spy={true} smooth={true}>
                                <li className="hover:text-fuchsia-600 transition  hover:border-fuchsia-600 cursor-pointer">Login</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>{click && content}</div>
                <button className="block md:hidden lg:hidden transition text-2xl" onClick={handleClick}>
                    {click ? <FaTimes /> : <FiAlignRight />}
                </button>
            </div>
        </nav>
    );
};

export default Nav;
