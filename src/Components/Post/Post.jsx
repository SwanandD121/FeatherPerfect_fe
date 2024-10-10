import React, { useState } from 'react';
import { FaRegCommentDots, FaRegShareSquare, FaHeart, FaRegHeart, FaEllipsisV } from 'react-icons/fa'; // Import icons from react-icons

const Post = ({ data }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="Post flex flex-col gap-3 bg-white/70 dark:bg-slate-800 rounded-3xl p-5 relative">
      

      <div className="flex justify-between items-center">
        <div className="flex items-center">
         
          <img
            src={data.img} 
            alt="Profile"
            className="rounded-full w-12 h-12 object-cover mr-3"
          />

      
          <div className="detail flex flex-col">
            <span className="dark:text-white">
              <b>{data.name}</b>
            </span>
           
            <span className="dark:text-white/80 text-sm">4 hours ago</span> {/* Date of posting */}
            
          </div>
          
          
        </div>
        

   
        <div className="relative">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <FaEllipsisV className="text-gray-500 dark:text-white cursor-pointer" /> {/* React Icon for three dots */}
          </button>

       
          {menuOpened && (
            <div className="absolute top-8 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-40 z-50">
              <ul className="text-gray-700 dark:text-white text-sm">
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 cursor-pointer">
                  Not Interested
                </li>
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 cursor-pointer">
                  Unfollow
                </li>
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 cursor-pointer">
                  Report
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <span className="dark:text-white/80 mt-4 text-lg">{data.desc}</span>
      <img
        src={data.img}
        alt=""
        className="rounded-lg object-contain max-h-96 w-full"
      />
      <div className="postReact flex gap-4 hover:cursor-pointer ml-2 mt-2">
        <button>
          {data.liked ? (
            <FaHeart className="size-6 text-red-500" /> 
          ) : (
            <FaRegHeart className="size-6 text-white h-8" />           
          )}
        </button>
        <FaRegCommentDots className="size-6 text-gray-100" />           
        <FaRegShareSquare className="size-6 text-gray-100" />            
      </div>

   
      <span className="ml-2 text-sm dark:text-white mt-2">
        Liked by <b>Vedansh</b>, <b>Swanand</b>, and<span className="ml-2 text-sm dark:text-white">
        <b>{data.likes}</b>
      </span> <b>{data.moreLikes} more ...</b>
      </span>

      
      
    </div>
  );
};

export default Post;
