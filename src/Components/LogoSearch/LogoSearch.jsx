import React from 'react';
import Logo from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';

const LogoSearch = () => {
  return (
    <div className='logoSearch flex gap-3 items-center overflow-hidden w-full'>
      <div className="Search flex bg-gray-100 dark:bg-slate-800 rounded-lg p-1 w-full relative">
        <input 
          type="text" 
          placeholder='#Explore' 
          className='w-full bg-transparent border-none outline-none dark:text-white pl-2' 
          style={{ zIndex: 1 }} // Ensure it's on top
        />
        <div className="s-icon flex items-center justify-center rounded-md p-2 text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] shadow-md border-2 hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa] hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer" style={{ zIndex: 2 }}>
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
