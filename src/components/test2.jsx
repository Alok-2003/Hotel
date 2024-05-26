import React, { useState } from 'react';

const MyComponent = () => {
    const [formData, setFormData] = useState({
        roomType: '',
        roomsAvail: '',
        roomsArea: '',
        bedSizeOrCapacity: '',
        roomRates: '',
        roomView: '',
        numGuests: '',
        facilities: [],
        additionalField1: '',
        additionalField2: ''
    });

    const [showHiddenFields, setShowHiddenFields] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFacilitiesChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            const facilities = prevState.facilities;
            if (checked) {
                facilities.push(value);
            } else {
                const index = facilities.indexOf(value);
                facilities.splice(index, 1);
            }
            return { ...prevState, facilities };
        });
    };

    const toggleHiddenFields = () => {
        setShowHiddenFields(!showHiddenFields);
    };

    const renderField = (label, name, type = 'text', options = []) => {
        if (!formData[name] && !showHiddenFields) return null;
        return (
            <div className="">
                <label
                    htmlFor={name}
                    className="text-gray-500 text-[1.4rem] font-semibold relative top-4 ml-[9px] px-[3px] bg-white w-fit"
                >
                    {label}
                </label>
                {type === 'select' ? (
                    <select
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className="px-[10px] py-[13px] border border-gray-300 rounded-md w-full text-lg bg-white hover:border-black hover:border-2"
                    >
                        <option value="">Select {label}</option>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={`Enter ${label}`}
                        className="hover:border-black input px-[10px] py-[7px] text-[1.4rem] border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                    />
                )}
            </div>
        );
    };

    return (
        <div>
            <div className="md:grid grid-cols-3 gap-4 gap-y-0">
                {renderField('Room Type', 'roomType', 'select', ['Standard', 'Deluxe', 'Suite'])}
                {renderField('Rooms Available', 'roomsAvail', 'number')}
                {renderField('Rooms Area', 'roomsArea', 'number')}
                {renderField('Bed Size or Capacity', 'bedSizeOrCapacity', 'select', ['Single Bed', 'Double Bed', 'Queen Size Bed', 'King Size Bed'])}
                {renderField('Rates of Room per Night', 'roomRates', 'number')}
                {renderField('Room View', 'roomView', 'select', ['Ocean View', 'City View', 'Mountain View', 'Garden View', 'Lake View', 'River View', 'Pool View', 'Park View', 'Harbor View', 'Desert View', 'Forest View', 'Golf Course View'])}
                {renderField('Number of Guests Allowed', 'numGuests', 'select', ['1', '2', '3', '4', '5', '6'])}
            </div>

            <div className="mb-4">
                <label
                    htmlFor="facilities"
                    className="text-gray-500 text-[1.4rem] font-semibold relative top-5 ml-[9px] px-[3px] bg-white w-fit"
                >
                    Facilities Provided by the Hotel
                </label>
                <div className="md:flex justify-evenly text-xl items-center gap-2 rounded-lg p-1.5 mt-1 bg-white border-[2px] border-gray-200">
                    {['Free Wifi', 'AC', 'Restaurant', 'Free Parking', 'Bar'].map((facility) => (
                        <label key={facility} className="inline-flex items-center mt-2">
                            <input
                                type="checkbox"
                                name="facilities"
                                value={facility}
                                checked={formData.facilities.includes(facility)}
                                onChange={handleFacilitiesChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <span className="ml-2 text-black">{facility}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <button
                    type="button"
                    onClick={toggleHiddenFields}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {showHiddenFields ? 'Hide Additional Fields' : 'Show Additional Fields'}
                </button>
            </div>

            {showHiddenFields && (
                <div className="md:grid grid-cols-3 gap-4 gap-y-0">
                    {renderField('Additional Field 1', 'additionalField1')}
                    {renderField('Additional Field 2', 'additionalField2')}
                </div>
            )}
        </div>
    );
};

export default MyComponent;
