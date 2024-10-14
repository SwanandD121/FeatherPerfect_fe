import React, { useState, useEffect } from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCardH';
import FollowersCard from '../FollowersCard/FollowersCard';

const ProfileSide = () => {
  const [followingCount, setFollowingCount] = useState(() => {
    // Retrieve following count from localStorage, default to 1 if not present
    const savedCount = localStorage.getItem('followingCount');
    return savedCount ? JSON.parse(savedCount) : 1;
  });

  // Update localStorage whenever followingCount changes
  useEffect(() => {
    localStorage.setItem('followingCount', JSON.stringify(followingCount));
  }, [followingCount]);

  // Function to handle follow button click
  const handleFollow = () => {
    setFollowingCount(prevCount => prevCount + 1); // Increment following count
  };

  return (
    <div className='profileSide flex flex-col gap-3 items-center object-cover overflow-hidden'>
      <LogoSearch />
      <ProfileCard followingCount={followingCount} />
      <FollowersCard onFollow={handleFollow} /> {/* Pass the handleFollow function */}
    </div>
  );
};

export default ProfileSide;
