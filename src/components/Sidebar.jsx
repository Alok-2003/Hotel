import React from 'react';


const Sidebar = ({ open, setOpen }) => {

    const Menus = [
        { title: "Dashboard", src: "dashboard" },
        { title: "Client Intrested ", src: "intrest" },
        { title: "Client Profile", src: "profile" },
        { title: "Hotels ", src: "hotel" },
        { title: "Create Listing", src: "listing" },
        // { title: "Analytics", src: "Chart" },
        // { title: "Files ", src: "Folder", gap: true },
        // { title: "Setting", src: "Setting" },
    ];
    return (
        <div
            className={`${open ? "w-60" : "w-20"
                } mt-16 bg-dark-purple h-screen p-5 pt-8 fixed duration-300 bg-gray-500/80 backdrop-blur-sm`}
        >
            <img
                src="public/control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"
                    }`}
                onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <img
                    src="public/H.png"
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}
                >
                    Hotel Hub
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"
                            } ${index === 0 && "bg-light-white"}`}
                    >
                        <img src={`./public/${Menu.src}.png`} className='h-[px] w-[px]' />
                        <span className={`${!open && "hidden"} origin- hover:text-black hover:text-lg duration-200`}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
