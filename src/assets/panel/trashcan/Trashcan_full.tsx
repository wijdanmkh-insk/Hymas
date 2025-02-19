import React from 'react';
import full from '/src/assets/icons/trashcan/full.svg';

const Trashcan_full: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-2 py-4 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-merah" src={full} />
      <div>
        <span className="block text-xs -mb-1">tong sampah</span>
        <div className="text-xxxs">
          <span className="block">penuh</span>
        </div>
      </div>
    </div>
  );
};

export default Trashcan_full;
