import React from 'react';

const Hero_page: React.FC = () => {
  return (
    <div className='flex items-center justify-center px-10 py-10 mx-10 my-20 bg-white w-full rounded-xl'>
      <div className="flex items-center justify-center">
        <div className="w-32 flex items-center justify-center relative">
          <img className="absolute" src="./src/assets/img/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero_page;
