import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'


const CliProfile = () => {

    const firebase = useFirebase();
    const [profiles, setprofile] = useState([]);

    useEffect(() => {
        firebase.listOfClient().then((profiles) => {
            setprofile(profiles.docs.map(doc => doc.data()))
        }
        )
    }, []);
    console.log(profiles)

    const creatorContacts = profiles.map(profile => profile.CreatorContact);
    console.log(creatorContacts)


    return (
        <div className='h-full font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex justify-center '>
            <div className='lg:w-11/12  w-[95%]  mt-20 '>
                <div className="hidden  backdrop-blur-sm bg-white/50 rounded-3xl font-bold text-sm lg:text-2xl  h-12 lg:grid lg:grid-cols-5 gap-4 justify-items-center items-center px-4">
                    {/* Image */}
                    <h1> Client Name </h1>
                    <h1> City</h1>
                    <h1> Pincode</h1>
                    <h1> Email</h1>
                    <h1> Contact</h1>
                </div>
                {profiles.map((p, index) => (

                    <main key={index} className="   justify-center">
                        {/* Image */}
                        <div className=" backdrop-blur-sm bg-white/50 rounded-3xl  text-sm lg:text-[1.4rem]  my-4 py-4 h-full lg:h-16  lg:flex gap-4 justify-items-center items-center px-4">
                            <h1 className='text-centre lg:ml-14 w-48 font-extrabold lg:font-thin text-2xl lg:text-[1.4rem]' > {p.name} </h1>
                            <div className="grid grid-cols-2 lg:ml-4 gap-x-28  lg:text-center text-[1.1rem] lg:text-[1.4rem] lg:grid-cols-4 lg:gap-0 w-full">
                                <h1> {p.city} </h1>
                                <h1> {p.pincode} </h1>
                                <h1 className=' truncate w-52 lg:w-full' > {p.email} </h1>
                                <h1> {p.contact}</h1>
                            </div>
                        </div>
                    </main>
                ))}
            </div>

        </div>
    );
};

export default CliProfile;
