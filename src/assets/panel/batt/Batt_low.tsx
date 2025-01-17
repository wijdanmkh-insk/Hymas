import React from 'react';
import batt_charging from '/src/assets/icons/battery/low.svg';

const Batt_low: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-2 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={batt_charging} alt="Battery Charging" />
      <div>
        <span className="block text-sm -mb-1">Baterai</span>
        <div className="text-xxxs">
          <span className="block">Lemah</span>
          <span className="block -mt-1">35%</span>
        </div>
      </div>
    </div>
  );
};

export default Batt_low;
