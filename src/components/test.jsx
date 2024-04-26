import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Dummy data for questions and options
    const questions = [
        "Event Gathering?",
        "Type of event?",
        "Provide Catering?"
    ];
    const options = [
        ["Small", "Medium", "Large"],
        ["Marriage ", "Birthday", "Party", "PersonalS","Meeting"],
        ["Yes", "No"]
    ];

    const handleOptionSelect = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestion] = option;
        setSelectedOptions(updatedSelectedOptions);

        // Move to the next question
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // All questions answered, do something with the selected options
            console.log("Selected options:", selectedOptions);
            // Reset state for next quiz session
            setCurrentQuestion(0);
            setSelectedOptions([]);
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center bg-black">
          <div className="w-8/12 mt-16 mx-auto p-6 bg-white rounded-lg shadow-md relative">
            <TransitionGroup>
                <CSSTransition key={currentQuestion} timeout={300} classNames="slide">
                    <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion]}</h2>
                </CSSTransition>
            </TransitionGroup>
            <div className="flex justify-between flex-wrap gap-4">
                {options[currentQuestion].map((option, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-md cursor-pointer relative" onClick={() => handleOptionSelect(option)}>
                        <p>{option}</p>
                        {selectedOptions[currentQuestion] === option && <span className="absolute top-2 right-2 text-green-500">&#10003;</span>}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Test;
