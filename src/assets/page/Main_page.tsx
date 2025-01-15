import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../others/Layout';

import Kembali_btn from '../button/Kembali_btn';

//panel
import Batt_charging from '../panel/Batt_charging';

const Hero_page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center mt-6 mx-10 min-h-screen'>
        <div className='flex bg-putih rounded-3xl px-12 py-4 w-full items-center justify-center mx-6'>
        <img className="w-32" src="./src/assets/img/Logo hymas.png"></img>
        </div>

        <div className="uppercase flex items-center justify-center text-center mt-4 text-white text-xs">
          <p>selamat datang di menu manajemen hsistem hymas yang digunakan untuk memantau kondisi perangkat dan mengendalikan perangkat saat diperlukan</p>
        </div>

        <div className="mt-auto">
          <Kembali_btn></Kembali_btn>
        </div>         

        <Batt_charging></Batt_charging>
      </div>
    </Layout>
  );
};

export default Hero_page;
