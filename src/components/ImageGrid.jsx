import React from 'react';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Big Image */}
      <div className="col-span-1">
        <img src="https://i.ibb.co/ncrXc2V/1.png" alt="Big" className="w-full h-auto" />
      </div>
      {/* Small Images */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <img src="https://i.ibb.co/B3s7v4h/2.png" alt="Small 1" className="w-full h-auto" />
        <img src="https://i.ibb.co/XXR8kzF/3.png" className="w-full h-auto" />
        <img src="https://i.ibb.co/B3s7v4h/2.png" alt="Small 3" className="w-full h-auto" />
        <img src="https://i.ibb.co/XXR8kzF/3.png" alt="Small 4" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ImageGrid;
