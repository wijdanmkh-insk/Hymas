import React from 'react';

const Batt_charging: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-2 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src="./src/assets/icons/battery/charging.svg" alt="Battery Charging" />
      <div>
        <span className="block text-sm -mb-1">Baterai</span>
        <div className="text-xxxs">
          <span className="block">Sedang Mengisi</span>
          <span className="block -mt-1">35%</span>
        </div>
      </div>
    </div>
  );
};

export default Batt_charging;
