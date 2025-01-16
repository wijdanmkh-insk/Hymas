import React from 'react';

const Trashcan_empty: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-2 py-4 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src="./src/assets/icons/trashcan/empty.svg" />
      <div>
        <span className="block text-xs -mb-1">tempat sampah</span>
        <div className="text-xxxs">
          <span className="block">Sedang beroperasi</span>
        </div>
      </div>
    </div>
  );
};

export default Trashcan_empty;
