import React from 'react'

const IntrestedClient = () => {
  return (
    <div className='h-full font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex justify-center '>
            <div className='w-10/12   mt-20 '>
                <div className=" backdrop-blur-sm bg-white/50 rounded-3xl font-bold text-2xl  h-12 grid grid-cols-5 gap-4 justify-items-center items-center px-4">
                    {/* Image */} 
                    <h1> Client Name </h1>
                    <h1> City</h1>
                    <h1> Pincode</h1>
                    <h1> Email</h1>
                    <h1> Contact</h1>
                </div>
                
            </div>

        </div>
  )
}

export default IntrestedClient