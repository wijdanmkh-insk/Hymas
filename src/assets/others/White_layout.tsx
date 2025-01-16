// src/Layout.tsx
import { ReactNode } from 'react';

type LayoutProps = { 
  children: ReactNode; 
};

const White_layout = ({ children }: LayoutProps) => (
    <div className='flex items-center justify-center px-8 py-6 mx-10 bg-white w-full max-w-lg rounded-xl shadow-md'>
        <div className="flex-grow text-center">
            {children}
        </div>
    </div>
);

export default White_layout;
