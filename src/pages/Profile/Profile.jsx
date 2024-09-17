import React from 'react'
import './Profile.css'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCardP from '../../Components/ProfileCard/ProfileCardP'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="profileCenter flex flex-col gap-4">
            <ProfileCardP/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile
