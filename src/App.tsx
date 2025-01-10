import React, { ReactNode } from 'react';
import '/src/App.css';
import './assets/page/Hero_page';
import Hero_page from './assets/page/Hero_page';

type LayoutProps = { 
  children: ReactNode; 
};

const Layout = ({ children }: LayoutProps) => (
  <div className="bg-gradient-to-r from-[#1ED37D] to-[#00904B] min-h-screen flex">
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <Layout>
      <Hero_page></Hero_page>
    </Layout>
  );
}

export default App;
