import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kembali_btn : React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 w-screen mx-12 py-2 bg-putih rounded-2xl hover:bg-putih hover:text-hijau-tua text-hijau-tua uppercase"
    >
      Kembali
    </button>
  );
};

export default Kembali_btn;
