import React from 'react';
import on from '/src/assets/icons/kamera/camera.svg';

const Cam_off: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-4 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={on} />
      <div className="flex flexbox">
        <span className="block text-sm -mb-1">hidupkan kamera</span>
      </div>
    </div>
  );
};

export default Cam_off;
