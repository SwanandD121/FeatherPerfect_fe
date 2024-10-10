import React, { useState, useRef } from 'react';
import profileimg from '../../img/profile-img.jpg';
import { FaPhotoVideo, FaVideo, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoMdSend } from 'react-icons/io';

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
    <div className="postShare flex justify-between items-center rounded-3xl p-4 gap-4 bg-white/70 dark:bg-slate-800">
      <img
        src={profileimg}
        alt=""
        className="rounded-full w-12 h-12 border-2 border-[#1060d7] shadow-md"
      />

      <div className="w-full flex flex-col items-center gap-4">
    
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Share your thoughts..."
            className="w-full h-10 mt-1 dark:text-white bg-gray-200/50 dark:bg-slate-700 border-2 dark:border-none rounded-lg outline-none text-sm p-2 pr-10"
          />
          <IoMdSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 cursor-pointer" size={24} />
        </div>

       
        <div className="postOptions flex w-full justify-between items-center text-sm">
          <div
            className="option flex items-center font-semibold text-green-600 hover:cursor-pointer"
            onClick={() => imageRef.current.click()}
          >
            <FaPhotoVideo className="mr-1 text-lg" /> Photo
          </div>

          <div className="option flex items-center font-semibold text-blue-600 hover:cursor-pointer">
            <FaVideo className="mr-1 text-lg" /> Video
          </div>

          <div className="option flex items-center font-semibold text-red-500 hover:cursor-pointer">
            <FaMapMarkerAlt className="mr-1 text-lg" /> Location
          </div>

          <div className="option flex items-center font-semibold text-yellow-500 hover:cursor-pointer">
            <FaCalendarAlt className="mr-1 text-lg" /> Schedule
          </div>

          <div>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        
        {image && (
          <div className="previewImage relative">
            <IoMdCloseCircle
              onClick={() => setImage(null)}
              className="absolute cursor-pointer shadow right-1 top-1 text-gray-700 hover:text-red-500"
              size={24}
            />
            <img
              src={image.image}
              alt=""
              className="w-full max-h-80 object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
