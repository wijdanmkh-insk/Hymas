import React from 'react';
import Layout from '../others/Layout';

import Kondisi_perangkat from '../others/Kondisi_perangkat';
import Atur_perangkat from '../others/Atur_perangkat';
import Kembali_btn from '../button/Kembali_btn';
import logo from '/src/assets/img/Logo_hymas.png';


const Panel_page: React.FC = () => {
  return (
    <Layout>
      <div className='relative flex flex-col items-center justify-center mt-6 mx-10 min-h-screen'>
        <div className="py-6 top-0">
          <div>
            <div className='flex bg-putih rounded-3xl px-12 py-4 w-full items-center justify-center'>
            <img className="w-32" src={logo}></img>
          </div>

          <div className="uppercase flex items-center justify-center text-center mt-4 text-white text-xs">
            <p>selamat datang di menu manajemen sistem hymas yang digunakan untuk memantau kondisi perangkat dan mengendalikan perangkat saat diperlukan</p>
          </div>
        </div>
      </div>

        
        <div className="mt-4 w-full flex flex-col space-y-4">
          <Kondisi_perangkat></Kondisi_perangkat>
          <Atur_perangkat></Atur_perangkat>
        </div>  
      </div>
      <div className="bottom-0 left-0 right-0 flex justify-center mb-4 mt-8">
          <Kembali_btn></Kembali_btn>
        </div>
    </Layout>
  )
};

export default Panel_page;
