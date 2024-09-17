import React from 'react'
// import "./ProfileSide.css"
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCardH'
import FollowersCard from '../FollowersCard/FollowersCard'


const ProfileSide = () => {
  return (
    <div className='profileSide flex flex-col gap-3 items-center object-cover overflow-hidden'>
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>

      
    </div>

    
  )
}

export default ProfileSide
