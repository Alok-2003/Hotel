import React, { useState } from "react";
const steps = [
  { title: "Requirement" },
  { title: "Strength" },
  { title: "Catering" },
  { title: "Verify" }
];


export function MultiStepForm({ steps }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((currentIndex) => {
      if (currentIndex >= steps.length - 1) return currentIndex;
      return currentIndex + 1;
    });
  }

  function back() {
    setCurrentStepIndex((currentIndex) => {
      if (currentIndex <= 0) return currentIndex;
      return currentIndex - 1;
    });
  }

  function submitForm() {
    // Logic to submit the form
    console.log("Form submitted!");
  }

  // Handle case when steps is undefined or not an array
  if (!Array.isArray(steps)) {
    return <div>Error: Steps must be an array</div>;
  }

  return (
    <>
      {/* <div className="flex items-center text-base font-medium">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center relative">
              <div
                className={`flex justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${currentStepIndex === index
                  ? "bg-teal-600 border-teal-600 text-white"
                  : "border-teal-600 text-teal-600"
                  }`}
              >
                {index + 1}
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 uppercase text-teal-600">
                {step.title}
              </div>
            </div>
            {index !== steps.length - 1 && (
              <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            )}
          </React.Fragment>
        ))}
      </div> */}

      <div className="x ">
        {steps[currentStepIndex]}
        <div className=" ">
          {currentStepIndex !== 0 && (
            <button
              className="mr-4 px-4 py-2 rounded bg-teal-600 text-white"
              onClick={back}
            >
              Back
            </button>
          )}
          {currentStepIndex !== steps.length - 1 ? (
            <button
              className="px-4 py-2 rounded bg-teal-600 text-white"
              onClick={next}
            >
              Next
            </button>
          ) : (
            <button
              className="px-4 py-2 rounded bg-teal-600 text-white"
              onClick={submitForm}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>

  );
}
