import ProfileCardH from "../ProfileCard/ProfileCardH";
import { useState, useEffect } from "react";
import ProfileFollowerCard from "../FollowersCard/ProfileFollowerCard";
import Posts from "../Posts/Posts";
import InfoCard from "../InfoCard/InfoCard";

const ProfilePanel = () => {
  const [followingCount, setFollowingCount] = useState(() => {
    // Retrieve following count from localStorage, default to 1 if not present
    const savedCount = localStorage.getItem('followingCount');
    return savedCount ? JSON.parse(savedCount) : 1;
  });

  const [activeTab, setActiveTab] = useState("followers"); // 'posts' or 'followers'

  // Update localStorage whenever followingCount changes
  useEffect(() => {
    localStorage.setItem('followingCount', JSON.stringify(followingCount));
  }, [followingCount]);

  return (
    <div className="midpanel md:basis-2/4 grow border-r-2 border-gray-600 flex flex-col h-[70vh] md:h-full">
      
      {/* Profile Card */}
      <div className="mt-4 pb-2 mx-2 border-b-2 border-gray-600">
        <ProfileCardH followingCount={followingCount} />
        <div className="flex justify-center mt-2 space-x-8">
          <button
            onClick={() => setActiveTab("followers")}
            className={`font-semibold w-full py-2 rounded-full ${activeTab === "followers" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} transition-colors duration-300 hover:bg-blue-400`}
          >
            Followers
          </button>
          <button
            onClick={() => setActiveTab("posts")}
            className={`font-semibold w-full rounded-full ${activeTab === "posts" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} transition-colors duration-300 hover:bg-blue-400`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`font-semibold w-full py-2 rounded-full ${activeTab === "info" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} transition-colors duration-300 hover:bg-blue-400`}
          >
            Info
          </button>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="mt-4 mx-2 flex-grow overflow-y-auto mb-4">
        {/* Conditional Rendering Based on Active Tab */}
        {activeTab === "posts" ? (
          <div className="flex flex-col items-center">
            <Posts/>
          </div>
        ) : activeTab === "followers" ? (
            <div className="flex flex-col items-center">
            <ProfileFollowerCard/>
          </div> ):(
            <div className="flex flex-col items-center">
            <InfoCard />
            </div>
      )}
      </div>
    </div>
  );
};

export default ProfilePanel;
