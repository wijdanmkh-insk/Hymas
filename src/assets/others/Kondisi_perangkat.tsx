import React from 'react';
import Brief_info from '../others/Brief_info';
import Batt_charging from '../panel/batt/Batt_charging';
import Trashcan_state from '../panel/trashcan/Trashcan_state';

const Kondisi_perangkat: React.FC = () => {
  return (
    <div className="border-putih border-4 rounded-xl p-4">
        <div className="mt-4 flex flex-col w-full h-full">
        <Brief_info />
        <div className="flex justify-between mt-4 space-x-4 flex-grow">
            <Batt_charging />
            <Trashcan_state />
        </div>
        </div>
    </div>
  );
};

export default Kondisi_perangkat;
