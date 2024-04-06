import React, { useState, useEffect } from 'react';

import { useFirebase } from '../context/Firebase'

const ImageGrid = () => {

  const firebase = useFirebase();
  const [hotels, sethotel] = useState([]);
  useEffect(() => {
    firebase.listOfHotels().then((hotels) => sethotel(hotels.docs.map(doc => doc.data())));
  }, []);
  
  // const [url, setURL] = useState(null);
  const URL= hotels[0];
  const url1=URL.imageUrls[0];
  console.log(url1)
  // useEffect(() => {
  //   firebase.getImageURL(hotels[0].imageUrls[0]).then((url) => setURL(url));
  // }, []);

  return (
    <div className="grid grid-cols-2 gap-1 ">
      {/* Big Image */}
      <div>
        <img src={url1} alt="Big" className="w-full  rounded-l-3xl " />
      </div>
      {/* Small Images */}
      <div className="grid grid-cols-2 gap-1  p-[0.75px]">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/fb/the-grand-ballroom.jpg?w=1200&h=-1&s=1" alt="Small 1" className="w-full h-full" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f9/lava-bar.jpg?w=1200&h=-1&s=1" alt="Small 1" className=" rounded-tr-3xl h-full" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f7/lava-bar.jpg?w=1200&h=-1&s=1" alt="Small 2" className="h-full " />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f0/amenities.jpg?w=1200&h=-1&s=1" alt="Small 2" className=" rounded-br-3xl h-full" />
      </div>
    </div>
  );
};

export default ImageGrid;
