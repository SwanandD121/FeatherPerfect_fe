import React from 'react';
import Cover from '../../img/cover-img.jpg';
import Profile from '../../img/profile-img.jpg';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaUserPlus, FaClipboardList } from 'react-icons/fa';

const ProfileCardH = ({ followingCount }) => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard rounded-3xl flex flex-col relative overflow-hidden bg-white/80 dark:bg-slate-800 pb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
   
      <div className="ProfileImages flex flex-col relative justify-center items-center">
        <img src={Cover} alt="Cover" className="w-full object-cover" />
        <img
          src={Profile}
          alt="Profile"
          className="w-24 absolute rounded-full border-2 border-[#1060d7] shadow-lg bottom-[-3rem] object-cover"
        />
      </div>

 
      <div className="ProfileName flex flex-col mt-12 mb-2 items-center gap-1">
        <span className="font-bold text-lg dark:text-white">Shaaz Jung</span>
        <span className="text-gray-600 dark:text-white/80">NatGeo Filmmaker</span>
      </div>

  
      <div className="followStatus flex flex-col items-center justify-center gap-1">
        <hr className="w-4/5 border border-[#cfcdcd] dark:border-slate-700 m-1" />

        <div className="w-4/5 flex items-center gap-4 justify-around">
      
          <div className="follow flex flex-col items-center">
            <FaUserFriends className="text-[#1060d7] text-xl" />
            <span className="font-bold text-lg dark:text-white">9999</span>
            <span className="text-gray-500 text-sm dark:text-white/80">Followers</span>
          </div>

         
          <div className="vl h-20 border-l-2 border-[#cfcdcd] dark:border-slate-700 m-1"></div>


          <div className="follow flex flex-col items-center">
            <FaUserPlus className="text-[#1060d7] text-xl" /> 
            <span className="font-bold text-lg dark:text-white">{followingCount}</span>
            <span className="text-gray-500 text-sm dark:text-white/80">Following</span>
          </div>

          {ProfilePage && (
            <>
              
              <div className="vl h-20 border-l-2 border-[#cfcdcd] dark:border-slate-700 m-1"></div>

   
              <div className="follow flex flex-col items-center">
                <FaClipboardList className="text-[#1060d7] text-xl" />
                <span className="font-bold text-lg dark:text-white">80</span>
                <span className="text-gray-500 text-sm dark:text-white/80">Posts</span>
              </div>
            </>
          )}
        </div>

        <hr className="w-4/5 border border-[#cfcdcd] dark:border-slate-700 m-1" />
      </div>

     
      <Link to="/profile" className="self-center mt-4">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="font-semibold py-1 px-4 rounded-full bg-gradient-to-r from-[#2eaafa] to-[#1060d7] text-white transition-transform transform hover:scale-105 focus:outline-none"
        >
          <span className='text-sm'>  Visit Profile</span>
        
        </button>
      </Link>
    </div>
  );
};

export default ProfileCardH;
