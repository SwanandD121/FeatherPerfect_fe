import React from 'react';
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft';
import ProfileCardP from '../../Components/ProfileCard/ProfileCardP';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className=" grid grid-cols-[28rem_auto_28rem] gap-4 relative">
      <ProfileLeft />
      <div className="profileCenter flex flex-col gap-4">
        {/* <ProfileCardP/> */}
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
