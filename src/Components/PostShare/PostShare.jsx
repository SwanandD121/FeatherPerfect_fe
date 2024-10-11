import React, { useState, useRef } from 'react';
import profileimg from '../../img/profile-img.jpg';
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimesSquare } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="postShare flex flex-col items-center rounded-3xl p-6 gap-4 bg-white/80 dark:bg-slate-800 shadow-lg transition-shadow hover:shadow-xl max-w-xl mx-auto">
      {/* Profile Image and Input */}
      <div className="flex w-full items-center gap-4">
        <img src={profileimg} alt="Profile" className="rounded-full w-14 h-14 border-2 border-[#1060d7] shadow-md" />

        {/* Reduced width of input field */}
        <input 
          type="text" 
          placeholder="What's Happening..." 
          className="w-4/5 h-12 dark:text-white bg-gray-100/90 dark:bg-slate-700 border dark:border-none rounded-lg outline-none p-3 shadow-sm focus:ring-2 focus:ring-[#1060d7] transition-all"
        />
      </div>

      {/* Post Options in a Column */}
      <div className="postOptions flex flex-col items-start text-sm w-full gap-3 mt-2">
        <div className="option flex items-center font-semibold text-green-500 hover:text-green-600 cursor-pointer transition-colors" onClick={() => imageRef.current.click()}>
          <UilScenery />Photo
        </div>
        <div className="option flex items-center font-semibold text-blue-500 hover:text-blue-600 cursor-pointer transition-colors">
          <UilPlayCircle />Video
        </div>
        <div className="option flex items-center font-semibold text-red-500 hover:text-red-600 cursor-pointer transition-colors">
          <UilLocationPoint />Location
        </div>
        <div className="option flex items-center font-semibold text-yellow-500 hover:text-yellow-600 cursor-pointer transition-colors">
          <UilSchedule />Schedule
        </div>
      </div>

      {/* Share Button */}
      <button className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] px-4 py-2 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg mt-4">
        Share
      </button>

      {/* Image Upload */}
      <input 
        type="file" 
        name="myImage" 
        ref={imageRef} 
        onChange={onImageChange} 
        style={{ display: "none" }} 
      />

      {/* Image Preview */}
      {image && (
        <div className="previewImage relative w-full max-h-80 mt-4">
          <UilTimesSquare onClick={() => setImage(null)} className="absolute top-2 right-2 cursor-pointer text-white bg-red-500 rounded-full p-1 hover:bg-red-600 transition-all shadow-lg" />
          <img src={image.image} alt="Preview" className="w-full object-cover rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default PostShare;
