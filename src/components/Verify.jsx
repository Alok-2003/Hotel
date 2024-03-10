import React from 'react'

const Verify = () => {
    return (
        <>
            <div className='min-h-[83vh] flex justify-center items-center'>
                <div className=" w-4/5 mx-2  svelte-1l8159u">
                    <div className="flex justify-center">
                        <div className="flex font-bold text-gray-600 text-3xl leading-8  h-6 mt-8 mb-4">Enter your E-mail / WhatsApp number</div>
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input placeholder="jhon@.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                    </div>
                    <div className="flex justify-center">
                        <a href="/hotels" className="relative inline-block text-lg group mt-3">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Submit</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify
