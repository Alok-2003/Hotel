import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const questions = [
        "Event Gathering?",
        "Type of event?",
        "Provide Catering?"
    ];
    const options = [
        ["Small", "Medium", "Large"],
        ["Marriage ", "Birthday", "Party", "PersonalS", "Meeting"],
        ["Yes", "No"]
    ];

    const handleOptionSelect = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestion] = option;
        setSelectedOptions(updatedSelectedOptions);

        if (!updatedSelectedOptions[currentQuestion]) {
            alert('Please select an option before moving to the next question.');
            return;
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("Selected options:", selectedOptions);
            setCurrentQuestion(0);
            setSelectedOptions([]);
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
            <div className="w-1/2 mt-16 mx-auto p-6 bg-white rounded-lg shadow-md relative">
                <TransitionGroup>
                    <CSSTransition key={currentQuestion} timeout={1000} classNames="slide">
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-semibold mb-16">{questions[currentQuestion]}</h2>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <div className="flex justify-between flex-wrap gap-4 mt-8">
                    {options[currentQuestion].map((option, index) => (
                        <div key={index} className={`bg-gray-200 p-4 rounded-md cursor-pointer relative ${selectedOptions[currentQuestion] === option ? 'bg-blue-500' : ''}`} onClick={() => handleOptionSelect(option)}>
                        <p>{option}</p>
                        {selectedOptions[currentQuestion] === option && <span className="absolute top-2 right-2 text-white">&#10003;</span>}
                    </div> 
                    ))}
                </div>

                
            </div>
        </div>
    );
}

export default Test;
