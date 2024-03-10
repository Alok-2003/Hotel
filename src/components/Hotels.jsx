import React from 'react';

const Hotels = () => {
    // Array of hotel objects
    const Typehotels = [
        { name: "JW Marriott", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "Vivanta by Taj", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "The Leela Palace", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "ITC Grand Chola", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "The Oberoi Amarvilas", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "The Oberoi Udaivilas", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
    ];

    return (
        <div className='mx-6 my-6 font-[gilroy]'>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {Typehotels.map((hotel, index) => (
                    <a href='404' key={index} className="relative rounded-3xl">
                        <img src={hotel.imageUrl} alt="Image" className="w-full h-auto rounded-3xl" />
                        <div className="flex justify-between items-end">
                            <p className="text-2xl font-bold">{hotel.name}</p>
                            <button className="text-xl mx-2 ">{hotel.location}</button>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
