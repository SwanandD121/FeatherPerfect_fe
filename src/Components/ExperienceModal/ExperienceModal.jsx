import React, { useState } from 'react';

const ExperienceModal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState(null);
  const [story, setStory] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Add logic to save the story and image
    console.log("Story:", story);
    console.log("Image:", image);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> {/* Dark overlay */}
      <div className="relative w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg"> {/* Modal background */}
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Share Your Wildlife Experience</h2>
        
        {/* Drag and Drop Area */}
        <div
          className="border-4 border-dashed border-gray-500 p-6 rounded-lg mb-4 transition-all duration-200 hover:shadow-lg hover:border-blue-500 cursor-pointer bg-gray-700" /* Lighter background */
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {image ? (
            <img src={image} alt="Preview" className="w-full h-60 object-cover rounded-lg" />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <p>Drag and drop an image here, or</p>
              <label className="bg-gradient-to-r from-[#2eaafa] to-[#1060d7] text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
                Browse Image
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          )}
        </div>

        {/* Story Input */}
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Share your wildlife story..."
          className="w-full p-4 mb-4 h-40 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white" /* Lighter background */
        ></textarea>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#2eaafa] to-[#1060d7] text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExperienceModal;
