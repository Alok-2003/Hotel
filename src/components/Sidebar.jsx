import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ open, setOpen }) => {
    const navigate = useNavigate();

    const Menus = [
        { title: "Dashboard", src: "dashboard", url: "admin_hotels" },
        { title: "Hotels", src: "hotel", url: "Hotel_table" },
        { title: "Client Interested", src: "interest", url: "Intrested_table" },
        { title: "Create Listing", src: "listing", url: "admin_create" },
        { title: "Client Profile", src: "profile", url: "Client_Table" },
    ];

    const handleNavigation = (path) => {
        if (path) {
            navigate(`/${path}`);
        }
    };

    return (
        <div
            className={`${open ? "md:w-60" : "w-20"} mt-16 bg-dark-purple h-screen p-5 pt-8 fixed duration-300 bg-gray-500/80 backdrop-blur-sm`}
        >
            <img
                src="/control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <img
                    src="/H.png"
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
                >
                    Hotel Hub
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                        onClick={() => handleNavigation(Menu.url)}
                    >
                        <img src={`./${Menu.src}.png`} className='h-[24px] w-[24px]' alt={`${Menu.title} icon`} />
                        <span className={`${!open && "hidden"} origin-left hover:text-black hover:text-lg duration-200`}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
