import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../others/Layout';
import White_layout from '../others/White_layout';

const Hero_page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='flex items-center justify-center min-h-screen'>
        <White_layout>
          <div className="flex-row">
            <div className="flex justify-center items-center flex-col">
              <div className="w-32">
                <img src="./src/assets/img/logo.png" alt="Logo" />
              </div>

              <div className='justify-center py-4'>
                <p className="uppercase text-xs text-hijau-tua">manajemen sistem</p>
                <p className="uppercase text-center text-4xl text-hijau-tua">hymas</p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4 text-center uppercase text-hijau-tua text-xs">
              <p>kami hadir untuk mengurangi</p>
              <p>sampah di sungai indonesia</p>
            </div>

            <div className="flex flex-col items-center mt-8">
              <div className='flex flex-row space-x-2'> 
                <div className='px-4 py-1 uppercase border-hijau-tua border-2 bg-putih text-hijau-tua rounded-2xl text-center' 
                onClick={()=>navigate('/main')}>
                  lihat
                </div>

                <div
                  className='px-4 py-1 uppercase bg-hijau-tua text-putih rounded-2xl text-center cursor-pointer'
                  onClick={() => navigate('/Login_test')}
                >
                  test
                </div>

                <div
                  className='px-4 py-1 uppercase bg-hijau-tua text-putih rounded-2xl text-center cursor-pointer'
                  onClick={() => navigate('/login')}
                >
                  masuk
                </div>
              </div>
            </div>
          </div>
        </White_layout>
      </div>
    </Layout>
  );
};

export default Hero_page;
