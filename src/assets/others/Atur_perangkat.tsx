import React from 'react';
import Batt_charging from '../panel/batt/Batt_charging';
import Trashcan_empty from '../panel/trashcan/Trashcan_empty';
import Info_kondisi from './Info_kondisi';

const Atur_perangkat: React.FC = () => {
  return (
    <div className="border-putih border-4 rounded-xl p-4">
        <div className="mt-4 flex flex-col w-full h-full">
        <Info_kondisi></Info_kondisi>
        <div className="flex justify-between mt-4 space-x-4 flex-grow">
            <Batt_charging />
            <Trashcan_empty />
        </div>
        </div>
    </div>
  );
};

export default Atur_perangkat;
