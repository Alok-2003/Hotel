import React, { useState } from 'react';

const Verify = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Dummy data for questions and options
    const questions = [
        "Question 1: What is your favorite color?",
        "Question 2: What is your favorite animal?",
        "Question 3: What is your favorite food?"
    ];
    const options = [
        ["Red", "Blue", "Green", "Yellow"],
        ["Dog", "Cat", "Bird", "Fish"],
        ["Pizza", "Burger", "Pasta", "Sushi"]
    ];

    const handleOptionSelect = (option) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestion] = option;
        setSelectedOptions(updatedSelectedOptions);
    };

    const handleNextQuestion = () => {
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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion]}</h2>
            <div className="grid grid-cols-2 gap-4">
                {options[currentQuestion].map((option, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-md cursor-pointer" onClick={() => handleOptionSelect(option)}>
                        <p>{option}</p>
                        {selectedOptions[currentQuestion] === option && <span className="absolute top-2 right-2 text-green-500">&#10003;</span>}
                    </div>
                ))}
            </div>
            <button onClick={handleNextQuestion} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Next</button>
        </div>
    );
}

export default Verify;
