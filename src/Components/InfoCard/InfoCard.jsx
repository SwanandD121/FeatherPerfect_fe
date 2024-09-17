import React, { useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { Link } from 'react-router-dom'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

  return (

    <div className="InfoCard flex flex-col bg-white/70 dark:bg-slate-800 rounded-3xl p-4 w-full items-center">
        <div className="InfoHead flex justify-between w-full font-bold">
            <h3 className='text-center w-full mb-3 dark:text-white'>Your Info</h3>
            <UilPen className="hover:cursor-pointer dark:text-white" onClick={()=>setModalOpened(true)}/>
            
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

        </div>

        <div className='flex flex-col w-full gap-2'>
            <hr className='h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20'/>

            <div className="info flex justify-between items-center">
                <span className='font-bold dark:text-white'>Gear</span>
                <span className='text-sm dark:text-white/80'>Nikon D5600</span>
            </div>

            <hr className='h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20'/>

            <div className="info flex justify-between items-center">
                <span className='font-bold dark:text-white'>Experience</span>
                <span className='text-sm dark:text-white/80'>1 year</span>
            </div>

            <hr className='h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20'/>

            <div className="info flex justify-between items-center">
                <span className='font-bold dark:text-white'>Age</span>
                <span className='text-sm dark:text-white/80'>20</span>
            </div>

            <hr className='h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20'/>

            <div className="info flex justify-between items-center">
                <span className='font-bold dark:text-white'>Achievements</span>
                <span className='text-sm dark:text-white/80'>2 Bird Surveys</span>
            </div>

            <hr className='h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20'/>
        </div>

        <Link to="/auth">
            <button className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 m-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer'>
                Logout
            </button>
        </Link>
    </div>
  )
}

export default InfoCard

// text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-[#297eff] hover:cursor-pointer 
// className='text-white bg-gradient-to-r from-[#2eaafa] to-[#8c04db] p-2 rounded-lg shadow-md border-2 hover:border-orange-500 hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-orange-500 hover:cursor-pointer'