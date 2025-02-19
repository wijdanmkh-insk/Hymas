import React from 'react';
import on from '/src/assets/icons/kamera/camera.svg';

const Cam_on: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="flex flexbox flex-col">
      <div
        className="flex items-center bg-white rounded-2xl px-4 py-4 uppercase text-hijau-tua"
        onClick={onClick} // Pass the onClick handler here
      >
        <img className="w-9 h-7 mr-2 text-hijau-muda" src={on} />
        <div className="flex flexbox flex-col">
          <div className="">
            <span className="block text-sm -mb-1">lihat melalui kamera</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cam_on;
