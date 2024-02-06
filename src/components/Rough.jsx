// import React, { useState } from 'react';
// import Select from 'react-select';

// const PhoneInput = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
  

//   { value: '+1', label: 'United States (+1)' },
//   { value: '+91', label: 'India (+91)' },
//   { value: "+61", label: "Australia (+61)" },
//   { value: "+880", label: "Bangladesh (+880)" },
//   { value: "+975", label: "Bhutan (+975)" }




//   // Set default country code to India
//   const [selectedCountryCode, setSelectedCountryCode] = useState({ value: '+91', label: 'India (+91)' });

//   // Sample country codes options
//   const countryCodesOptions = [
//     { value: '+1', label: 'United States (+1)' },
//     { value: '+91', label: 'India (+91)' },
//     // Add more country code options as needed
//   ];

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleCountryCodeChange = (selectedOption) => {
//     setSelectedCountryCode(selectedOption);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission or further processing here
//     console.log('Selected Country Code:', selectedCountryCode);
//     console.log('Phone Number:', phoneNumber);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex items-center mb-4">
//         <Select
//           className="w-1/3 mr-2"
//           placeholder="Select Country Code"
//           value={selectedCountryCode}
//           onChange={handleCountryCodeChange}
//           options={countryCodesOptions}
//         />
//         <input
//           type="text"
//           className="w-2/3 px-3 py-2 border rounded-md"
//           placeholder="Enter Phone Number"
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default PhoneInput;
