import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useFirebase } from '../context/Firebase';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const HotelTable = () => {
    const firebase = useFirebase();
    const [hotels, setHotels] = useState([]);
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false); // State for sidebar open/close

    const columns = [
        {
            name: 'Serial No',
            selector: row => row.id,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Hotel',
            selector: row => row.hotel,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Hotel Manager',
            selector: row => row.contact,
            wrap: true,
        },
        {
            name: 'Details',
            selector: row => row.details,
            cell: row => (
                <div className='' >
                    <button
                        className="text-blue-500 hover:underline"

                        onClick={() => handleViewDetails(row.details)}
                    >
                        Analytic
                    </button>
                    <button
                        className="text-blue-500 hover:underline ml-5"
                        onClick={() => handleEditDetails(row.details)}
                    >
                        Edit
                    </button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        firebase.listOfHotels().then(async (hotels) => {
            const hotelsData = hotels.docs.map(doc => doc.data());
// console.log(doc.id)
            // Transform the fetched data to the required structure
            const formattedHotels = hotelsData.map((hotel, index) => ({
                id: index + 1, // Assign serial number
                hotel: hotel.fullName || hotel.name || "N/A", // Hotel name
                contact: hotel.CreatorContact || hotel.contact || "N/A", // Contact number
                details: hotel.id, // Placeholder for details
            }));

            setHotels(formattedHotels);
            setRecords(formattedHotels); // Initialize records with the fetched data
            console.log(hotelsData);
        });
    }, [firebase]);

    const handleFilter = (event) => {
        const newData = hotels.filter(row => {
            return row.hotel.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    };

    const handleViewDetails = (hotelId) => {
        navigate(`/admin_hotels/${hotelId}`);
    };
    const handleEditDetails = (hotelId) => {
        navigate(`/edit/${hotelId}`);
    };

    return (
        <div>
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-60 ml-56  w-[40%] md:w-[82.4%]" : "ml-20 md:w-[94.15%]"} md:w-[100%] w-[95%]`}
            >

                <div className='bg-gray-100 p-20'>
                    <div className='mb-4'>
                        <div className='flex justify-between items-center px-1'>
                            <div className="text-3xl">
                                <h1>Hotel details</h1>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    onChange={handleFilter}
                                    placeholder="Search by hotel name"
                                    className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <DataTable
                            columns={columns}
                            data={records}
                            fixedHeader
                            pagination
                            customStyles={{
                                headCells: {
                                    style: {
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#4A4A4A',
                                    },
                                },
                                cells: {
                                    style: {
                                        fontSize: '18px',
                                        color: '#4A4A4A',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HotelTable;
