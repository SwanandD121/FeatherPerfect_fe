import React, { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard flex flex-col bg-white dark:bg-slate-800 rounded-3xl p-6 w-full items-center shadow-lg">
      <div className="InfoHead flex justify-between w-full font-bold mb-4">
        <h3 className="text-center w-full dark:text-white">Your Info</h3>
        <UilPen 
          className="hover:cursor-pointer text-blue-500 dark:text-white hover:text-blue-600 transition duration-300" 
          onClick={() => setModalOpened(true)} 
        />
        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>

      <div className="flex flex-col w-full gap-2">
        <hr className="h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20" />

        {/** Info Items */}
        {[
          { label: 'Gear', value: 'Nikon D5600' },
          { label: 'Experience', value: '1 year' },
          { label: 'Age', value: '20' },
          { label: 'Achievements', value: '2 Bird Surveys' },
        ].map((info, index) => (
          <React.Fragment key={index}>
            <div className="info flex justify-between items-center py-2">
              <span className="font-semibold dark:text-white">{info.label}</span>
              <span className="text-sm text-gray-700 dark:text-white/80">{info.value}</span>
            </div>
            <hr className="h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20" />
          </React.Fragment>
        ))}
      </div>

      
    </div>
  );
};

export default InfoCard;
