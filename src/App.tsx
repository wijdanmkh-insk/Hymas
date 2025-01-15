import React, { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import '/src/App.css';
import Hero_page from './assets/page/Hero_page';
import Login_page from './assets/page/Login_page';
import Main_page from './assets/page/Main_page';
import Panel_page from './assets/page/Panel_page';
import Footer from './assets/others/Footer';
import Login_test from './assets/page/Login_test';
import Add_User from './assets/page/Add_User';

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
        <Route path="/Login_test" element={<Login_test/>} />
        <Route path="/main" element={<Main_page/>}/>
        <Route path="/panel" element={<Panel_page/>}/>
        <Route path="/Add_user" element={<Add_User/>}/>
      </Routes>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

