import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export let selectedGatheringGlobal = '';

const Gatherings = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [selectedCard, setSelectedCard] = useState(null); // State to store the selected card
    const option = queryParams.get('option');
    const navigate = useNavigate();


    let cards = [];

    switch (option) {
        case "Marriage":
            cards = [
                { title: "Couple", image: "/Marriage/Couple.jpg", size: "Small" },
                { title: "Family Gathering", image: "/Marriage/FM.jpg", size: "Medium" },
                { title: "Large Gathering", image: "/Marriage/GC.jpg", size: "Large" }
            ];
            break;
        case "BirthdayParty":
            cards = [
                { title: "Small gathering (2-5 guests)", image: "/Birthday Party/SG.jpg", size: "Small" },
                { title: "Medium-sized party (6-10 guests)", image: "/Birthday Party/MS.jpg", size: "Medium" },
                { title: "Large celebration (10+ guests)", image: "/Birthday Party/LG.jpg", size: "Large" }
            ];
            break;
        case "Party":
            cards = [
                { title: "Exclusive experience for 2", image: "/Party.jpg", size: "Small" },
                { title: "Small group (4-6 guests)", image: "/Party.jpg", size: "Medium" },
                { title: "Larger party (8+ guests)", image: "/Party.jpg", size: "Large" }
            ];
            break;
        case "PersonalStay":
            cards = [
                { title: "Solo", image: "/Personal Stay/Solo.jpg", size: "Small" },
                { title: "Couple's getaway", image: "/Personal Stay/Couple.jpg", size: "Medium" },
                { title: "Family vacation (3+ guests)", image: "/Personal Stay/Family.jpg", size: "Large" }
            ];
            break;
        case "Conference":
            cards = [
                { title: "Small team", image: "/Conference/Small team.jpg", size: "Small" },
                { title: "Large team", image: "/Conference/Large team.jpg", size: "Medium" },
                { title: "Extra Large team", image: "/Conference/Extra large team.jpg", size: "Large" }
            ];
            break;
        case "Anniversary":
            cards = [
                { title: "Romantic retreat", image: "/Anniversary/Couple.jpg", size: "Small" },
                { title: "Celebration with close friends (4-6 guests)", image: "/Anniversary/close friend.jpg", size: "Medium" },
                { title: "Extended family gathering (8+ guests)", image: "/Anniversary/Family gathering.jpg", size: "Large" }
            ];
            break;
        default:
            cards = [];
    }

    const handleCardSelect = (card) => {
        setSelectedCard(card);
        selectedGatheringGlobal = card.size;
        navigate("/catering");

    };
    console.log(selectedGatheringGlobal)

    return (
        <div className='md:min-h-[100vh]   min-h-[86vh] flex justify-center items-center md:mb-0 mb-6 bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_1.jpg?alt=media&token=3d8d91eb-7773-4aa6-b1a7-f6b45604213c")] bg-cover'>
            <div className='w-4/5 '>
                <div className="flex justify-center ">
                    <div className="flex font-bold text-white md:text-5xl leading-8  h-6 md:mt-8 md:mb-8 mt-20 mb-6 text-[26px]">Choose gathering strength</div>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    {/* Mapping over the cards array */}
                    {cards.map((card, index) => (
                        <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg" onClick={() => handleCardSelect(card)}>
                            <div className="h-[60vh]">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={card.image} alt={card.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div  className="absolute inset-0 flex md:translate-y-[38%] translate-y-[33%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 className="font-dmserif md:text-3xl text-2xl font-bold text-white ">{card.title}</h1>
                                {card.size && <h1 className="font-dmserif md:text-3xl text-2xl  font-bold text-white ">{card.size}</h1>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gatherings;
