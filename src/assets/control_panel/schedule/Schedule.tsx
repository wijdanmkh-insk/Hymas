import React from 'react';
import img from '/src/assets/icons/schedule/schedule.svg';

const Schedule: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-4 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={img} />
      <div className="flex flexbox">
        <span className="block text-sm -mb-1">jadwalkan hymas</span>
      </div>
    </div>
  );
};

export default Schedule;
