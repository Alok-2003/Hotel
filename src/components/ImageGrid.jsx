import React from 'react';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-1 ">
      {/* Big Image */}
      <div>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/b9/exterior.jpg?w=1200&h=-1&s=1" alt="Big" className="w-full  rounded-l-3xl " />
      </div>
      {/* Small Images */}
      <div className="grid grid-cols-2 gap-1  p-[0.75px]">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/fb/the-grand-ballroom.jpg?w=1200&h=-1&s=1" alt="Small 1" className="w-full h-full" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f9/lava-bar.jpg?w=1200&h=-1&s=1" alt="Small 1" className=" rounded-tr-3xl h-full" />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f7/lava-bar.jpg?w=1200&h=-1&s=1" alt="Small 2" className="h-full " />
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f0/amenities.jpg?w=1200&h=-1&s=1" alt="Small 2" className=" rounded-br-3xl h-full"  />
      </div>
    </div>
  );
};

export default ImageGrid;
