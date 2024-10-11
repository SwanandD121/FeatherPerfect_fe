import React, { useRef, useState } from 'react';
import ProfileImg from '../../img/profile-img.jpg';
import CoverImg from '../../img/cover-img.jpg'; // Import the cover photo

const SettingsModal = ({ isOpen, onClose, username = "ShaazJung", email }) => {
  const modalRef = useRef();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState(username);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleSave = () => {
    // You can add save logic here, for example updating the user info
    alert(`Saved Name: ${name}, Username: ${userName}`);
    onClose(); // Close the modal after saving
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
              <p className="text-white font-semibold">{userName}</p>
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

          {/* Input fields for Name and Username */}
          <div className="mt-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-300 font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your username"
                className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="bg-gray-600 text-white py-2 px-6 rounded hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
