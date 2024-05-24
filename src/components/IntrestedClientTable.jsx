import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import Sidebar from './Sidebar';
import { FaSearch } from 'react-icons/fa';
import DataTable from 'react-data-table-component';

const IntrestedClientTable = () => {
    const firebase = useFirebase();
    const [intrestedClients, setIntrestedClients] = useState([]);
    const [records, setRecords] = useState([]);
    const [open, setOpen] = useState(false); // State for sidebar open/close

    useEffect(() => {
        firebase.IntrestedClientData().then((Intrested) => {
            const clientsData = Intrested.docs.map((doc, index) => ({
                id: index + 1, // Add serial number
                ...doc.data()
            }));
            setIntrestedClients(clientsData);
            setRecords(clientsData); // Initialize records with the fetched data
        });
    }, [firebase]);

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
            name: 'Hotel Name',
            selector: row => row.hotelname,
            sortable: true,
            wrap: true,
        },
        // {
        //     name: 'City',
        //     selector: row => row.city,
        //     wrap: true,
        // },
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
        
        {
            name: 'Event',
            selector: row => row.event,
            wrap: true,
        },
        // {
        //     name: 'Gathering',
        //     selector: row => row.Gathering,
        //     wrap: true,
        // },
        // {
        //     name: 'Catering',
        //     selector: row => row.catering,
        //     wrap: true,
        // },
        {
            name: 'Creator Contact',
            selector: row => row.CreatorContact,
            wrap: true,
        },
    ];

    const handleFilter = (event) => {
        const newData = intrestedClients.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    };

    return (
        <div>
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-60 ml-56  w-[82.4%]" : "ml-20 md:w-[94.15%]"} w-[95%]`}
            >
                <div className='bg-gray-300 pt-20 px-6 h-[100vh]'>
                    <div className='mb-4'>
                        <div className='flex justify-between items-center px-1'>
                            <div className="text-3xl">
                                <h1>Interested Client Details</h1>
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
}

export default IntrestedClientTable;
