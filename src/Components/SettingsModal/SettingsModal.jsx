import React, { useRef } from 'react';
import ProfileImg from '../../img/profile-img.jpg';
import CoverImg from '../../img/cover-img.jpg'; // Import the cover photo

const SettingsModal = ({ isOpen, onClose, username = "ShaazJung", email }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-gray-800 p-5 rounded-lg w-[600px] shadow-lg"
        ref={modalRef}
      >
        <div className="flex justify-between items-center">
          <h3 className="m-0 font-semibold text-white">Settings</h3>
          <button
            onClick={onClose}
            className="bg-none text-white border-none text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="mt-5">
          {/* Profile and Cover photos */}
          <div className="flex items-center mb-4">
            {/* Profile photo - larger */}
            <div className="flex flex-col items-center mr-4">
              <img
                src={ProfileImg}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-2 transform transition-transform duration-300 hover:scale-105" // Hover effect added
              />
              <p className="text-white font-semibold">{username}</p>
            </div>

            {/* Cover photo with space between profile photo */}
            <img
              src={CoverImg} // Use the cover image
              alt="Cover"
              className="w-2/3 h-32 object-cover rounded-lg ml-7 transform transition-transform duration-300 hover:scale-105" // Hover effect added
            />
          </div>

          {/* Buttons for changing profile and cover photos */}
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-gray-700 text-white py-2 px-4 rounded hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Change Profile Photo
            </button>
            <button
              className="bg-gray-700 text-white py-2 px-4 rounded hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mr-5"
            >
              Change Cover Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
