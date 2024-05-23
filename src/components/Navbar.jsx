// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FiAlignRight } from "react-icons/fi";
import { useFirebase } from '../context/Firebase';


const Nav = () => {
    const [click, setClick] = useState(false);
    const firebase = useFirebase();

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        firebase.signOut();
        window.location.href = '/'; // Redirect to login page after logout
    };

    const content = (
        <div className="lg:hidden block absolute top-16 w-full  left-0 right-0 backdrop-blur-sm bg-black/50">
            <ul className="text-centre text-xl px-8 py-0 ">
                <Link to={"admin_hotels"} spy={true} smooth={true} >
                    <li className="my-2 py-2 border-b  " >Admin</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-2 py-2 border-b ">About</li>
                </Link>
                {firebase.isLoggedIn ? (
                    <Link  onClick={handleLogout} >
                        <li className="my-2 py-2 border-b " >Logout</li>
                    </Link>
                ) : (
                    <Link to="/">
                        <li className="my-2 py-2 border-b ">Login</li>
                    </Link>
                )}
            </ul >
        </div>
    );

    return (
        <nav className=" ">
            <div className="gilroyMed z-50 bg-gray-500/80 backdrop-blur-sm md:font-['gilroy] h-16 flex justify-between  text-white md:px-8 px-4 py-4  fixed w-full  ">
                <div className="md:font-['gilroy] flex items-center flex-1">
                    <span className="text-3xl md:font-bold  "> Hotel Hub</span>
                </div>
                <div className=" font-[gilroy] md:flex md:flex-1 items-center justify-end font-thin hidden">
                    <div className="flex">
                        <ul className="flex gap-8 mr- text-[20px]">
                            <Link to={"admin_hotels"}   >
                                <li className="">Admin</li>
                            </Link>
                            <Link   >
                                <li className="">About</li>
                            </Link >
                            {firebase.isLoggedIn ? (
                                <Link to="/" onClick={handleLogout} >
                                    <li className="" >Logout</li>
                                </Link>
                            ) : (
                                <Link to="/">
                                    <li className="">Login</li>
                                </Link>
                            )}
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
