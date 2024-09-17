import React, { useState } from 'react'
import Home from "../../img/home-filled.png";
import Noti from "../../img/bell-filled.png";
import Setting from "../../img/setting-filled.png";
import Dark from "../../img/dark-filled.png";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';



import './RightSide.css'

// for dark mode
import { useEffect } from 'react'; //also useState is required, but thats already imported above
// for dark mode

const RightSide = () => {

  // for dark mode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    } else {
      setTheme('light');
    }

  }, [])

  useEffect(() =>{
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark"? "light" : "dark");
  };

  // for dark mode

  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="rightSide flex flex-col gap-6">
        <div className="navIcons flex h-8 items-center justify-around mt-5 hover:cursor-pointer">

            <Link to="/home"><img src={Home} alt="" className='w-[2.5rem] h-[2.5rem]'/> </Link>

            <img src={Noti} alt="" className='w-8 h-8'/>
            <img src={Setting} alt="" className='w-[2.2rem] h-[2.2rem]'/>


            {/* <img src={Dark} alt="" className='w-8 h-8' onClick={handleThemeSwitch}/> */}

            {/* Dark mode Toggle Button */}

            <label class="switch" onChange={handleThemeSwitch}>
              <input type="checkbox"/>
              <span class="slider"></span>
            </label>

            {/* Dark mode Toggle Button */}

            {/* Dark mode Toggle Button MUI */}
            
            {/* Dark mode Toggle Button MUI*/}


        </div>


        <TrendCard/>

        <button onClick={()=> setModalOpened(true)} className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer">
            Share an experience!
        </button>
        
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
