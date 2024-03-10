import React from 'react';
import { Link } from 'react-router-dom';

const Conference = () => {
    const cards = [
        { title: "Small team", image: "/Conference/Small team.jpg" },
        { title: "Large team", image: "/Conference/Large team.jpg" },
        { title: "Extra Large team", image: "/Conference/Extra large team.jpg" }
    ];

    return (
        <>
            <div className='w-4/5'>
                <div className="flex justify-center">
                    <div className="flex font-bold text-gray-600 text-5xl leading-8 h-6 mt-8 mb-8">Choose gathering strength</div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="h-96">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={card.image} alt={card.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <Link to="/catering" className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white">{card.title}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Conference;
