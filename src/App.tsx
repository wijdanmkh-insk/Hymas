import React, { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import '/src/App.css';
import Hero_page from './assets/page/Hero_page';
import Login_page from './assets/page/Login_page';

type LayoutProps = { 
  children: ReactNode; 
};

const Layout = ({ children }: LayoutProps) => (
  <div className="bg-gradient-to-r from-[#1ED37D] to-[#00904B] min-h-screen flex flex-col">
    <div className="flex-grow">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero_page />} />
        <Route path="/login" element={<Login_page />} />
      </Routes>
    </Layout>
  );
}

export default App;
