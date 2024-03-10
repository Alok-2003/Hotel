import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Footer = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    return (
        <footer className="font-[gilroy] bg-gray-800 text-white p-4 text-center  w-full absolute top-100%">
            <div className="container mx-auto">
                <p> Hotel Hub © 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
