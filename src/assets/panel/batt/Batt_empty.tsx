import React from 'react';

const Batt_empty: React.FC = () => {
  return (
    <div className="flex items-center">
        <img className="w-6 h-6 mr-2" src="./src/assets/icons/battery/empty.svg"/>
        <span>Baterai</span>
        <span>Kosong</span>
    </div>
  );
};

export default Batt_empty;
