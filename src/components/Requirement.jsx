import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export let selectedEventGlobal = '';

const Requirement = () => {
    const [selectedCard, setSelectedCard] = useState(null); // State to store the selected card

    const cards = [
        { title: "Marriage", image: "/Marriage.jpg", link: "/gathering?option=Marriage" },
        { title: "Birthday Party", image: "/Birthday.jpg", link: "/gathering?option=BirthdayParty" },
        { title: "Party", image: "/Party.jpg", link: "/gathering?option=Party" },
        { title: "Personal Stay", image: "/Personal_Stay.jpg", link: "/ReserveCount" },
        // { title: "Personal Stay", image: "/Personal_Stay.jpg", link: "/gathering?option=PersonalStay" },
        { title: "Conference", image: "/Conference.jpg", link: "/gathering?option=Conference" },
        { title: "Anniversary", image: "/anniversary.jpg", link: "/gathering?option=Anniversary" }
    ];

    const handleCardSelecdt = (card) => {
        setSelectedCard(card);
        console.log(card)
        selectedEventGlobal = card.title; // Update selectedEventGlobal with the new value
        console.log(selectedEventGlobal); // Log the selected card globally
    };

    const handleCardSelect = (card) => {
        setSelectedCard(card);
        console.log(card)
        selectedEventGlobal = card.title; // Update selectedEventGlobal with the new value
        console.log(selectedEventGlobal);
};


    return (
        <div className='md:min-h-[100vh]  gilroyMed  flex justify-center items-center mb-6 md:mb-0 bg-custom-bg bg-cover'>
            <div className=''>
                <div className="flex justify-center  ">
                    <div className="flex font-bold gilroyMed text-white md:text-5xl text-3xl leading-8 h-6 mt-[4.5rem] md:mt-16 md:mb-2">What is your requirement</div>
                </div>
                <div className="grid grid-cols-1 gap-5 p-8 md:grid-cols-2 lg:grid-cols-3 w-[100%] h-[100%] mb-4 md:mb-0">
                    {cards.map((card, index) => (
                        <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg" onClick={() => handleCardSelect(card)}>
                            <div className="h-[35vh] ">
                                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={card.image} alt={card.title} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                             <Link to={card.link} className="absolute inset-0 flex translate-y-[38%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-3xl font-bold text-white ">{card.title}</h1>
                                   </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Requirement;
