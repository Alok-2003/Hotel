import React, { useState } from 'react';
import { BiFullscreen } from "react-icons/bi";

const ImageGrid = ({ slides, handleImageClick, handleCloseFullScreen }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle click on an image and show full-screen image
    const handleImageClickFullScreen = (index) => {
        if (index === 0) {
            // If the clicked image is the big image, display it in full-screen mode
            setSelectedImage(slides[0]);
        } else {
            // If the clicked image is a small image, display it in full-screen mode
            setSelectedImage(slides[index]);
        }
    };

    // Function to close full-screen image
    const handleCloseFullScreenImage = () => {
        setSelectedImage(null);
        handleCloseFullScreen(); // Optional: You can call parent component function if needed
    };

    return (
        <div className='hidden lg:block'>
            <div className="grid grid-cols-2 gap-1 ">
                {/* Big Image */}
                <div className="relative">
                    <img src={slides[0]} alt="Big" className="w-full rounded-l-3xl cursor-pointer"  />
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300" onClick={() => handleImageClickFullScreen(0)}>
                                <div className="">
                                <span className="flex justify-center text-white text-7xl font-extrabold"><BiFullscreen /></span>
                                <span className="text-white text-3xl font-semibold">Click to see full screen</span>
                                </div>
                            </div>
                    {selectedImage && (
                        <div className="absolute top-7 -right-[26rem] cursor-pointer z-10" onClick={handleCloseFullScreenImage}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                </div>
                {/* Small Images */}
                <div className="grid grid-cols-2 gap-1 p-[0.75px] rounded-xl">
                    {slides.slice(1).map((slide, index) => (
                        <div key={index} className="relative">
                            <img
                                src={slide}
                                alt={`Small ${index + 1}`}
                                className="w-full h-full cursor-pointer rounded-3xl"
                                onClick={() => handleImageClickFullScreen(index + 1)} // Call handleImageClickFullScreen for full-screen image
                            />
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300" onClick={() => handleImageClickFullScreen(index + 1)}>
                            <div className="">
                                <span className="flex justify-center text-white text-6xl font-semibold"><BiFullscreen /></span>
                                <span className="text-white text-2xl font-semibold">Click to see full screen</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-screen Image Modal */}
            {selectedImage && (
                <div className="fixed -top-[20%] left-[23%] px- w-[58%] h-full bg- bg-opacity-75 flex justify-center items-center" onClick={handleCloseFullScreenImage}>
                    <div className="absolute top-[5%] -right-80 cursor-pointer z-10" onClick={handleCloseFullScreenImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <img
                        src={selectedImage}
                        alt="Full Screen"
                        className=" max-w-[109%]"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageGrid;
