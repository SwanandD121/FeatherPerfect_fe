import React, { useState } from 'react';
import Cover from '../../img/cover-img.jpg';
import Profile from '../../img/profile-img.jpg';
import { FaUserFriends, FaUserPlus, FaClipboardList, FaCaretDown } from 'react-icons/fa';

const ProfileCardH = ({ followingCount }) => {
  const ProfilePage = true;

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="ProfileCard bg-white/80 dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      
      {/* Cover and Profile Image Section */}
      <div className="relative">
        <img src={Cover} alt="Cover" className="w-full h-32 object-cover" />
        <img
          src={Profile}
          alt="Profile"
          className="absolute left-4 bottom-[-40px] w-24 h-24 rounded-full border-4 border-white dark:border-slate-800"
        />
      </div>

      {/* Profile Info */}
      <div className="p-4 mt-5 text-center">
        <h2 className="font-bold text-xl dark:text-white">Shaaz Jung</h2>
        <p className="text-gray-600 dark:text-white/80">@shaazjung | NatGeo Filmmaker</p>
        <p className="text-sm text-gray-500 dark:text-white/60 mt-2">
          Wildlife photographer and cinematographer documenting the life of big cats in the wild.
        </p>
      </div>

      {/* Stats */}
      <div className="px-6">
        {/* Dropdown Toggle Icon */}
        <div className="flex justify-center items-center cursor-pointer" onClick={toggleDropdown}>
          <FaCaretDown className={`text-gray-500 dark:text-white/80 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </div>

        {/* Conditional Rendering of Stats */}
        {isDropdownOpen && (
          <div className="flex justify-around border-t border-b border-gray-300 dark:border-slate-700 py-2">
            {/* Followers */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <FaUserFriends className="text-[#1DA1F2] text-xl mr-1" />
              <span className="text-sm text-gray-500 dark:text-white/80">Followers</span>
              </div>
                <span className="font-bold text-lg dark:text-white">9,999</span>
            </div>

            {/* Following */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <FaUserPlus className="text-[#1DA1F2] text-xl mr-1" />
              <span className="text-sm text-gray-500 dark:text-white/80">Following</span>
              </div>
                <span className="font-bold text-lg dark:text-white">{followingCount}</span>
            </div>

            {/* Posts */}
            {ProfilePage && (
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <FaClipboardList className="text-[#1DA1F2] text-xl mr-1" />
                <span className="text-sm text-gray-500 dark:text-white/80">Posts</span>
                </div>
                  <span className="font-bold text-lg dark:text-white">80</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCardH;
