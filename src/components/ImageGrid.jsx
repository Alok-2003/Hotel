import React from 'react';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-1 ">
      {/* Big Image */}
      <div>
        <img src="https://i.ibb.co/ncrXc2V/1.png" alt="Big" className="w-full  rounded-l-3xl " />
      </div>
      {/* Small Images */}
      <div className="grid grid-cols-2 gap-1  p-[0.75px]">
        <img src="https://i.ibb.co/B3s7v4h/2.png" alt="Small 1" className="" />
        <img src="https://i.ibb.co/B3s7v4h/2.png" alt="Small 1" className=" rounded-tr-3xl" />
        <img src="https://i.ibb.co/XXR8kzF/3.png" alt="Small 2" className=" " />
        <img src="https://i.ibb.co/XXR8kzF/3.png" alt="Small 2" className=" rounded-br-3xl" />
      </div>
    </div>
  );
};

export default ImageGrid;
