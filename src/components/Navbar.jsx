import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Nav = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click)
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 ">
            <ul className='text-centre text-xl p-20'>
                <Link spy={true} smooth={true} to=''>
                    <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Hotel</li>
                </Link>
                <Link spy={true} smooth={true} to=''>
                    <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>About</li>
                </Link>
                <Link spy={true} smooth={true} to=''>
                    <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>Login</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className='font-[gilroy] h-16 flex justify-between z-50 text-white lg:py-5 px-20 py-4 bg-slate-900 '>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold '> Hotel Hub</span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px] '>
                            <Link spy={true} smooth={true} >
                                <li className='hover:text-fuchsia-600 trantio border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Hotel</li>
                            </Link>
                            <Link spy={true} smooth={true} >
                                <li className='hover:text-fuchsia-600 trantio border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
                            </Link>
                            <Link spy={true} smooth={true} >
                                <li className='hover:text-fuchsia-600 trantio border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Login</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className='block sm:hidden transtion' onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    )
}

export default Nav
