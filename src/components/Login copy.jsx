import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import Select from 'react-select';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const [otp, setotp] = useState(initialState);
    const [confirmationResult, setconfirmationResult] = useState(initialState);
    const [otpsent, setotpsent] = useState(initialState);

    const auth = getAuth(app);
    const router = useRouter();

    const [selectedCountryCode, setSelectedCountryCode] = useState({ value: '+91', label: '+91 (India)' });
    // Sample country codes options
    const countryCodesOptions = [
        { value: '+91', label: '+91 (India)' },
        { value: "+61", label: "+61 (Australia)" },
        { value: "+880", label: "+880 (Bangladesh)" },
        { value: "+975", label: "+975 (Bhutan)" },
        { value: '+1', label: '+1 (United States)' },
        // Add more country code options as needed
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission or further processing here
        console.log('Selected Country Code:', selectedCountryCode);
        console.log('Phone Number:', phoneNumber);
    };
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleCountryCodeChange = (selectedOption) => {
        setSelectedCountryCode(selectedOption);
    };

    const [fullName, setFullName] = useState(''); // Initialize state for the input field

    // Function to handle changes in the input field
    const handleFullNameChange = (e) => {
        setFullName(e.target.value); // Update the state with the new value entered by the user
    };

    return (
        <>
            <div className="md:min-h-[93.2vh]   min-h-[86vh]   flex justify-center items-center   ">
                <div className="h-fit font-['gilroy'] bg-white shadow-xl rounded-xl px-8 pt-6 pb-6 border-2">
                    <form onSubmit={handleSubmit} className=' h-full w-[300px]  ' >
                        <h1 className='text-4xl font-bold '>Login</h1>
                        <div className="block ">
                            <h3 className='block mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300 mt-3' >Full name</h3>
                            <input
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light font-medium"
                                placeholder="Enter full name"
                                required
                                type="text"
                                value={fullName} // Bind the value of the input field to the state variable
                                onChange={handleFullNameChange} // Call the handleFullNameChange function when the input value changes
                            />
                            <h3 className='block mb-2 text-xl font-semibold text-gray-900 dark:text-gray-300 mt-3'>Phone Number</h3>
                            <div className='text-2xl flex '>
                                <Select
                                    className="w-2/5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Select Country Code"
                                    value={selectedCountryCode}
                                    required
                                    onChange={handleCountryCodeChange}
                                    options={countryCodesOptions}
                                />
                                <input
                                    type="text"
                                    className="w-3/5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Enter Phone Number"
                                    required
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
                            </div>
                        </div>


                        <a href="/otp" className="relative inline-block text-lg group mt-3">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Next</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login