import React, { useState } from 'react';
import Select from 'react-select';
import '../App.css'

const PhoneInput = () => {
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="PInpbox">
        <Select
          className="PInpSelect"
          placeholder="Select Country Code"
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
          options={countryCodesOptions}
        />
        <input
          type="text"
          className="PInp"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
};

export default PhoneInput;
