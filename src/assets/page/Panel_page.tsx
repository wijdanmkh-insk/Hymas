import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../others/Layout';
import White_layout from '../others/White_layout';

const Hero_page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='flex items-center justify-center mt-6'>
        <img className="w-64" src="./src/assets/img/Logo hymas.png"></img>         
      </div>
    </Layout>
  );
};

export default Hero_page;
