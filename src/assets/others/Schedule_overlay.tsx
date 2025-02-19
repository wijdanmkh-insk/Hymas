import React from 'react';


interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative object-center bg-white py-10 rounded-lg shadow-lg px-4">
      <button className="absolute top-0 right-0 m-2 text-red-500 uppercase" onClick={onClose}>tutup</button>
        <h2 className="text-xl text-center font-bold uppercase text-hijau-tua">jadwalkan hymas</h2>
            <div className="object-center flex-col text-sm mt-2 uppercase">
              
            </div>
      </div>
    </div>
  );
};

export default Overlay;
