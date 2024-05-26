import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useFirebase } from '../context/Firebase';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import icons
import Chart from "chart.js";

const AdHotels = () => {
    const { hotelId } = useParams(); // Retrieve hotelId from URL parameter
    const firebase = useFirebase();

    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]); // State to store image URLs
    const [hotel, setHotel] = useState(null); // State to store the selected hotel
    const [detailsOpen, setDetailsOpen] = useState(false); // State to control dropdown visibility

    useEffect(() => {
        firebase.listOfHotels().then((hotels) => {
            const filteredHotels = hotels.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(hotel => hotel.id === parseInt(hotelId));

            setHotel(filteredHotels[0]);
            console.log(filteredHotels[0]);

            if (filteredHotels.length > 0) {
                const rawUrls = filteredHotels[0].imageUrls;
                const fetchUrls = rawUrls.map(rawUrl => firebase.getImageURL(rawUrl));

                Promise.all(fetchUrls)
                    .then(urls => setSlides(urls))
                    .catch(error => console.error("Error fetching image URLs:", error));
            }
        });
    }, [firebase, hotelId]);

    useEffect(() => {
        var config = {
            type: 'line',
            data: {
                labels: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                datasets: [
                    {
                        label: "Single bed",
                        backgroundColor: "#3182ce",
                        borderColor: "#3182ce",
                        data: [12, 19, 3, 5, 2, 3, 7], // Example data for the current year
                        fill: false,
                    },
                    {
                        label: "Double bed",
                        fill: false,
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [8, 11, 6, 6, 7, 8, 9], // Example data for the previous year
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Sales Charts",
                    fontColor: "white",
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Month",
                                fontColor: "white",
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                                fontColor: "white",
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <div>
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-64 ml-56 mr-4  w-[40%] md:w-[95%]" : "ml-24 mr-2"
                    } md:w-[92%]  w-[95%] md:mt `}
            >
                <div className="flex">
                    <div className='lg:w-[55%] mt-20'>
                        <Carousel  >
                            {slides.map((s) => (
                                <img key={s} src={s} alt="" />
                            ))}
                        </Carousel>
                        <div className=" mt-2 flex justify-between items-center">

                            <h1 className='text-[2rem] font-bold underline underline-offset-3' >Hotel Details</h1>
                            <button
                                className="border text-gray-50 text-xl duration-300 relative group cursor-pointer overflow-hidden h-12 w-48 rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-sky-700"
                                onClick={() => setDetailsOpen(!detailsOpen)}
                            >
                                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"></div>
                                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
                                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"></div>
                                <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
                                <p className="z-10 absolute bottom-2 left-2 flex justify-between items-center">
                                    {detailsOpen ? 'Hide Details' : 'Show Details'}
                                    {detailsOpen ? <FaChevronUp className="ml-8" /> : <FaChevronDown className="ml-8" />}
                                </p>
                            </button>
                        </div>
                        {detailsOpen && hotel && (
                            <div className="mt-">
                                <p><strong>Full Name:</strong> {hotel.fullName}</p>
                                <p><strong>Creator Contact:</strong> {hotel.CreatorContact}</p>
                                <p><strong>Location URL:</strong> <a href={hotel.locationUrl} target="_blank" rel="noopener noreferrer">{hotel.locationUrl}</a></p>
                                <p><strong>City:</strong> {hotel.city}</p>
                                <p><strong>Bed Size or Capacity:</strong> {hotel.bedSizeOrCapacity}</p>
                                <p><strong>Rooms Available:</strong> {hotel.roomsAvail}</p>
                                <p><strong>Rooms Area:</strong> {hotel.roomsArea} sq ft</p>
                                <p><strong>Pincode:</strong> {hotel.pincode}</p>
                                <p><strong>Email:</strong> <a href={`mailto:${hotel.email}`}>{hotel.email}</a></p>
                                <p><strong>Room Type:</strong> {hotel.roomType}</p>
                                <p><strong>Room View:</strong> {hotel.roomView}</p>
                                <p><strong>Room Rates:</strong> ₹{hotel.roomRates} per night</p>
                                <p><strong>Number of Guests:</strong> {hotel.numGuests}</p>
                                <p><strong>WhatsApp Number:</strong> {hotel.whatsappNo}</p>
                                <p><strong>Event Facilities:</strong> {hotel.EventFacilities.join(', ')}</p>
                            </div>
                        )}
                    </div>
                    <div className=" mt-20 ml-4 w-[55%] text-2xl">
                        {/* <h1 className='text-3xl font-bold underline underline-offset-3' >Booking History</h1> */}
                        <div>
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-700">
                                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            {/* <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                                Overview
                                            </h6> */}
                                            <h2 className="text-white text-xl font-semibold">Booking in a year </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex-auto">
                                    {/* Chart */}
                                    <div className="relative h-64">
                                        <canvas id="line-chart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-700">
                                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h2 className="text-white text-xl font-semibold">Booking in a year </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex-auto">
                                    <div className="relative h-64">
                                        <canvas id="doughnut"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdHotels;
