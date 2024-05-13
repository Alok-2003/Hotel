import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const questions = [
        "Event Gathering?",
        "Type of event?",
        "Provide Catering?",
        "Fill other details"
    ];
    const options = [
        ["Small", "Medium", "Large"],
        ["Marriage ", "Birthday", "Party", "PersonalS", "Meeting"],
        ["Yes", "No"],
        [""]
    ];

    const handleOptionSelect = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestion] = option;
        setSelectedOptions(updatedSelectedOptions);

        if (!updatedSelectedOptions[currentQuestion]) {
            alert('Please select an option before moving to the next question.');
            return;
        }
        console.log(questions.length - 1)
        console.log(currentQuestion)
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setSelectedOptions([]);
        }
        console.log("Selected options:", updatedSelectedOptions);
    };

    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
            <div className="w-2/3 mt-16 mx-auto p-8 bg-white rounded-lg shadow-md relative">
                <TransitionGroup>
                    <CSSTransition key={currentQuestion} timeout={1000} classNames="slide">
                        <div className="fixed flex items-center justify-center w-2/3 mb-4">
                            <h2 className="text-3xl font-semibold text-center">{questions[currentQuestion]}</h2>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <div className="flex justify-between flex-wrap gap-4 mt-14">
                    {currentQuestion < questions.length && options[currentQuestion].map((option, index) => (
                        <button
                            key={index}
                            className={`bg-white px-4 py-2 rounded-md cursor-pointer uppercase ${selectedOptions[currentQuestion] === option ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition text-lg`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                            {selectedOptions[currentQuestion] === option && <span className="absolute top-2 right-2 text-white">&#10003;</span>}
                        </button>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Test;
