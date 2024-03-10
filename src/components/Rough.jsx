import React, { useState } from 'react';

const Rough = () => {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(4).fill(null));

  const handleOptionSelect = (index, option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = option;
    setSelectedOptions(updatedOptions);
    // Move to the next step upon selecting an option
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const renderOptions = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Marriage')}>
              Marriage
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Birthday Party')}>
              Birthday Party
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Party')}>
              Party
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Personal Stay')}>
              Personal Stay
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Couple')}>
            Couple
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Family gathering')}>
            Family gathering
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Group gathering')}>
            Group gathering
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Conference')}>
              Conference
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Anniversary')}>
              Anniversary
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Conference')}>
              Conference
            </div>
            <div className="option" onClick={() => handleOptionSelect(stepIndex, 'Anniversary')}>
              Anniversary
            </div>
          </>
        );
      // Add cases for other steps
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="options-container">{renderOptions(step)}</div>
    </div>
  );
};

export default Rough;
