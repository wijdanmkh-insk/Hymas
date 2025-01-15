import React from 'react';

const Batt_charging: React.FC = () => {
  return (
    <div className="flex items-center">
      <img className="w-6 h-6 mr-2" src="./src/assets/icons/battery/charging.svg" alt="Battery Charging" />
      <span>Baterai Mengisi</span>
    </div>
  );
};

export default Batt_charging;
