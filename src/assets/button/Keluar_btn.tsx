import React from 'react';
import { useNavigate } from 'react-router-dom';

const Keluar_btn: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Change '/logout' to the appropriate route for your logout functionality
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-700 uppercase"
    >
      Keluar akun
    </button>
  );
};

export default Keluar_btn;
