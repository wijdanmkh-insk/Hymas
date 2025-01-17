import React from 'react';
import Layout from '../others/Layout';
import Kondisi_perangkat from '../others/Kondisi_perangkat';
import Kembali_btn from '../button/Kembali_btn';

const Main_page: React.FC = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center mt-10 mx-10'>
        <div className='flex bg-putih rounded-3xl px-12 py-4 w-full items-center justify-center mx-6'>
          <img className="w-32" src="./src/assets/img/Logo hymas.png" alt="Logo hymas" />
        </div>

        <div className="mt-4">
          <Kondisi_perangkat></Kondisi_perangkat>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          <Kembali_btn></Kembali_btn>
        </div>         
      </div>
    </Layout>
  );
};

export default Main_page;
