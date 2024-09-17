import React from 'react'
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowersCard w-full p-5  rounded-3xl  flex flex-col gap-2 text-xs bg-white/70 dark:bg-slate-800">
        <h3 className='self-center font-bold text-base mb-2 dark:text-white'>Your Followers</h3>

        {Followers.map((follower, id) =>{
            return (
                <div className="follower flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <img src={follower.img} alt="" className='followerImg rounded-full w-12 h-12 border-2 border-[#1060d7]' />
                        <div className="name flex flex-col gap-1">
                            <span className='font-bold dark:text-white'>{follower.name}</span>
                            <span className='dark:text-white/80'>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
