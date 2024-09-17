import React from 'react'
import Cover from '../../img/cover-img.jpg'
import Profile from '../../img/profile-img.jpg'

const ProfileCardP = () => {

  const ProfilePage = true;

  return (
    <div className="ProfileCard rounded-3xl flex flex-col relative overflow-x-clip bg-white/70 dark:bg-slate-800 pb-2">
        <div className="ProfileImages flex flex-col relative justify-center items-center ">
            <img src={Cover} alt="" className='w-full'/>
            <img src={Profile} alt="" className="w-24 absolute rounded-full border-2 border-[#1060d7] shadow-md shadow-[0px_4px_17px_2px_rgba(0, 0, 0, 0.25)] bottom-[-3rem]" />
        </div>

        <div className="ProfileName flex flex-col mt-12 mb-1 items-center gap-1">
          <span className="font-bold dark:text-white">ShaazJung</span>
          <span className='dark:text-white/80'>NatGeo Filmmaker</span>
        </div>

        <div className="followStatus flex flex-col items-center justify-center gap-1">
            <hr className='w-4/5 border-2 border-[#cfcdcd] dark:border-slate-700 m-1 rounded-sm'/>

            <div className='w-4/5 flex items-center gap-2 justify-around'>

              <div className="follow flex flex-col items-center gap-1">
                <span className='font-bold dark:text-white'>9,999</span>
                <span className='text-gray-500 text-sm dark:text-white/80'>Followers</span>
              </div>

              <div className="vl h-20 border-l-4 border-[#cfcdcd] dark:border-slate-700 m-1 rounded-sm"></div>

              <div className="follow flex flex-col items-center gap-1">
                <span className='font-bold dark:text-white'>1</span>
                <span className='text-gray-500 text-sm dark:text-white/80'>Following</span>
              </div>

              {ProfilePage && (
                <>
                
                <div className="vl h-20 border-l-4 border-[#cfcdcd] dark:border-slate-700 m-1 rounded-sm"></div>

                <div className="follow flex flex-col items-center gap-1">
                <span className='font-bold dark:text-white'>80</span>
                <span className='text-gray-500 text-sm dark:text-white/80'>Posts</span>
              </div>

                </>
              )}

            </div>

            <hr className='w-4/5 border-2 border-[#cfcdcd] dark:border-slate-700 m-1 rounded-sm '/>

        </div>
              
        
    </div>
  )
}

export default ProfileCardP
