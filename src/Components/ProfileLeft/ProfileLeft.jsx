import React, { useState, useEffect } from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import ProfileCardP from '../ProfileCard/ProfileCardP'; 

const ProfileLeft = () => {
  const [followingCount, setFollowingCount] = useState(() => {
    // Retrieve following count from localStorage, default to 1 if not present
    const savedCount = localStorage.getItem('followingCount');
    return savedCount ? JSON.parse(savedCount) : 1;
  });

  // Update localStorage whenever followingCount changes
  useEffect(() => {
    localStorage.setItem('followingCount', JSON.stringify(followingCount));
  }, [followingCount]);

  // Function to handle increasing following count
  const handleFollow = () => {
    setFollowingCount(prevCount => prevCount + 1);
  };

  return (
    <div className="profileLeft flex flex-col gap-4 items-center">
      <LogoSearch />
      <InfoCard />
      <ProfileCardP followingCount={followingCount} /> {/* Pass followingCount as prop */}
      <FollowersCard onFollow={handleFollow} /> {/* Pass handler to update count */}
    </div>
  );
};

export default ProfileLeft;
