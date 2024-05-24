import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useFirebase } from '../context/Firebase';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const ClientTable = () => {
    const firebase = useFirebase();
    const [profiles, setProfiles] = useState([]);
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
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            wrap: true,
        },
        {
            name: 'City',
            selector: row => row.city,
            wrap: true,
        },
        {
            name: 'Pincode',
            selector: row => row.pincode,
            wrap: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            wrap: true,
        },
        {
            name: 'Contact',
            selector: row => row.contact,
            wrap: true,
        },
    ];

    useEffect(() => {
        firebase.listOfClient().then(profiles => {
            const profilesData = profiles.docs.map((doc, index) => {
                const data = doc.data();
                return {
                    id: index + 1, // Assign serial number
                    name: data.fullName || data.name || "N/A",
                    city: data.city || "N/A",
                    pincode: data.pincode || "N/A",
                    email: data.email || "N/A",
                    contact: data.contact || "N/A",
                };
            });

            setProfiles(profilesData);
            setRecords(profilesData); // Initialize records with the fetched data
        });
    }, [firebase]);

    const handleFilter = (event) => {
        const newData = profiles.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    };

    const handleViewDetails = (clientId) => {
        navigate(`/clientView/${clientId}`);
    };

    return (
        <div className="">
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-60 ml-56  w-[40%] md:w-[82.4%]" : "ml-20 md:w-[94.15%]"} md:w-[100%] w-[95%]`}
            >
                <div className='bg-gray-600 pt-20 px-6  h-[100vh]'>
                    <div className='mb-4'>
                        <div className='flex justify-between items-center px-1'>
                            <div className="text-3xl">
                                <h1>Client Details</h1>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    onChange={handleFilter}
                                    placeholder="Search by client name"
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

export default ClientTable;
