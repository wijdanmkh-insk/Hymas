import React from 'react';
import Hymas_on from '../control_panel/activate/hymas_on';
import Cam_on from '../control_panel/camera/camera_on';
import Info_kondisi from './Info_kondisi';

const Atur_perangkat: React.FC = () => {
  return (
    <div className="border-putih border-4 rounded-xl p-4">
        <div className="mt-4 flex flex-col w-full h-full">
        <Info_kondisi></Info_kondisi>
        <div className="flex justify-between mt-4 space-x-4 flex-grow">
            <Hymas_on></Hymas_on>
            <Cam_on></Cam_on>
        </div>
        </div>
    </div>
  );
};

export default Atur_perangkat;
