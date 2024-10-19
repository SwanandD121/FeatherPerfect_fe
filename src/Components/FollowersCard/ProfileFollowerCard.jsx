import React from 'react';
import { Followers } from '../../Data/FollowersData';

const ProfileFollowerCard = ({ onFollow }) => {
  return (
    <div className="FollowersCard w-full p-5 rounded-lg shadow-md bg-white/70 dark:bg-slate-800">
      <h3 className="self-center font-bold text-lg mb-4 dark:text-white text-center">Your Followers</h3>

      {Followers.map((follower, id) => {
        return (
          <div
            key={id}
            className="follower flex items-center justify-between p-3 mb-3 bg-white dark:bg-slate-700 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <img
                src={follower.img}
                alt=""
                className="followerImg rounded-full w-14 h-14 object-cover border-2 border-[#1060d7] shadow-md"
              />
              <div className="name flex flex-col gap-1">
                {/* Follower Name and Username */}
                <span className="font-semibold dark:text-white text-md">{follower.name}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">@{follower.username}</span>
              </div>
            </div>

            {/* Follow Button */}
            <button
              className="px-4 py-2 text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#1060d7] hover:to-[#2eaafa] focus:ring-2 focus:ring-offset-2 focus:ring-[#2eaafa]"
              onClick={onFollow}
            >
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileFollowerCard;
