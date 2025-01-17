import React from 'react';
import batt_full from '/src/assets/icons/battery/full.svg';

const Batt_full: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-2 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={batt_full}/>
      <div>
        <span className="block text-sm -mb-1">Baterai</span>
        <div className="text-xxxs">
          <span className="block">Terisi penuh</span>
        </div>
      </div>
    </div>
  );
};

export default Batt_full;
