import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Gatherings = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const option = queryParams.get('option');

    let cards = [];

    switch (option) {
        case "Marriage":
            cards = [
                { title: "Couple", image: "/Marriage/Couple.jpg", description: "2" },
                { title: "Family Gathering", image: "/Marriage/FM.jpg", description: "10 to 50" },
                { title: "Large Gathering", image: "/Marriage/GC.jpg", description: "100+" }
            ];
            break;
        case "BirthdayParty":
            cards = [
                { title: "Small gathering (2-5 guests)", image: "/Birthday Party/SG.jpg" },
                { title: "Medium-sized party (6-10 guests)", image: "/Birthday Party/MS.jpg" },
                { title: "Large celebration (10+ guests)", image: "/Birthday Party/LG.jpg" }
            ];
            break;
        case "Party":
            cards = [
                { title: "Exclusive experience for 2", image: "/Party.jpg" },
                { title: "Small group (4-6 guests)", image: "/Party.jpg" },
                { title: "Larger party (8+ guests)", image: "/Party.jpg" }
            ];
            break;
        case "PersonalStay":
            cards = [
                { title: "Solo", image: "/Personal Stay/Solo.jpg" },
                { title: "Couple's getaway", image: "/Personal Stay/Couple.jpg" },
                { title: "Family vacation (3+ guests)", image: "/Personal Stay/Family.jpg" }
            ];
            break;
        case "Conference":
            cards = [
                { title: "Small team", image: "/Conference/Small team.jpg" },
                { title: "Large team", image: "/Conference/Large team.jpg" },
                { title: "Extra Large team", image: "/Conference/Extra large team.jpg" }
            ];
            break;
        case "Anniversary":
            cards = [
                { title: "Romantic retreat", image: "/Anniversary/Couple.jpg" },
                { title: "Celebration with close friends (4-6 guests)", image: "/Anniversary/close friend.jpg" },
                { title: "Extended family gathering (8+ guests)", image: "/Anniversary/Family gathering.jpg" }
            ];
            break;
        default:
            cards = [];
    }

    return (
        <div className='md:min-h-[93.2vh]   min-h-[86vh] flex justify-center items-center md:mb-0 mb-6'>
            <div className='w-4/5 '>
                <div className="flex justify-center ">
                    <div className="flex font-bold text-gray-600 md:text-5xl leading-8  h-6 md:mt-8 md:mb-8 mt-20 mb-6 text-[26px]">Choose gathering strength</div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    {/* Mapping over the cards array */}
                    {cards.map((card, index) => (
                        <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                            <div className="md:h-96">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={card.image} alt={card.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <Link to={`/catering`} className="absolute inset-0 flex md:translate-y-[38%] translate-y-[33%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif md:text-3xl text-2xl font-bold text-white ">{card.title}</h1>
                                {card.description && <h1 className="font-dmserif md:text-3xl text-2xl  font-bold text-white ">{card.description}</h1>}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gatherings;
