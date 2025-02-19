import React from 'react';

interface UbahJadwalProps {
  onClose: () => void;
}

const Ubah_jadwal: React.FC<UbahJadwalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        <button className="absolute top-0 right-0 m-2 text-red-500" onClick={onClose}>
          <i className="fas fa-times mr-2"></i> Batalkan
        </button>
        <h2 className="text-lg font-bold mt-4">Ubah Jadwal</h2>
        <p>This is where you can edit your schedule!</p>
        {/* Add your form or content for editing the schedule here */}
      </div>
    </div>
  );
};

export default Ubah_jadwal;
