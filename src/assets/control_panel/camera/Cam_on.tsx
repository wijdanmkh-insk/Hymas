import React from 'react';
import on from '/src/assets/icons/kamera/camera.svg';
import Enable_cam from './Lihat_camera';

const Cam_on: React.FC = () => {
  return (
    <div className="flex flexbox flex-col">
    <div className="flex items-center bg-white rounded-2xl px-4 py-4 uppercase text-hijau-tua">
      <img className="w-9 h-7 mr-2 text-hijau-muda" src={on} />
      <div className="flex flexbox flex-col">
        <div className="">
            <span className="block text-sm -mb-1">matikan kamera</span>
        </div>
      </div>
    </div>

    <div className="pt-1">
        <Enable_cam />
    </div>
    
    </div>
  );
};

export default Cam_on;
