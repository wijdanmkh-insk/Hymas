// src/Layout.tsx
import React, { ReactNode } from 'react';

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

export default Layout;
