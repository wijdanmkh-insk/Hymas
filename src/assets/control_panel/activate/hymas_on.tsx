import React from 'react';
import on from '/src/assets/icons/on-off/on.svg';

const Hymas_on: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-2 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={on} alt="Battery Charging" />
      <div>
        <span className="block text-sm -mb-1">hidupkan</span>
        <div className="text-xxxs">
          <span className="block">hymas</span>
        </div>
      </div>
    </div>
  );
};

export default Hymas_on;
