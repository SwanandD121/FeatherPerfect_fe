import React, { useState, useEffect } from 'react';
import Home from "../../img/home-filled.png";
import Noti from "../../img/bell-filled.png";
import Setting from "../../img/setting-filled.png";
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';
import './RightSide.css';
import NotificationModal from '../NotificationModal/NotificationModal';

const notifications = [
  { title: 'New Follower', message: 'Jane Doe started following you.', time: '1 hour ago' },
  { title: 'New Comment', message: 'John commented on your "Leopard in the Wild" photo.', time: '3 hours ago' },
  { title: 'Photo Feature', message: 'Your "Eagle in Flight" photo has been featured in the Trending section.', time: '5 hours ago' },
  { title: 'Contest Winner', message: 'You’ve won the "Wildlife of Africa" photography contest!', time: '1 day ago' },
  { title: 'Photo Upload Success', message: 'Your "Elephants at Sunset" photo has been successfully uploaded.', time: '2 days ago' },
  { title: 'New Message', message: 'David sent you a message: "Would love to collaborate on a project."', time: '3 days ago' },
];
const RightSide = () => {
  const [theme, setTheme] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [notiModalOpened, setNotiModalOpened] = useState(false); 
  const [count,setCount] =useState(notifications.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="rightSide flex flex-col gap-6">
      <div className="navIcons flex h-8 items-center justify-around mt-5 hover:cursor-pointer">
        <Link to="/home">
          <img src={Home} alt="home" className='w-[2.5rem] h-[2.5rem]' />
        </Link>
       
       <div className='relative ' onClick={() => setNotiModalOpened(true)}>
        <img src={Noti} alt="notifications" className='w-8 h-8 ' onClick={() => setNotiModalOpened(true)} />

       <div className='absolute top-[-8px] right-[-10px] bg-red-500  p-[3px] px-[8px] rounded-full'>
        {count}
       </div>
        </div>
      
        <img src={Setting} alt="settings" className='w-[2.2rem] h-[2.2rem]' />

        <label className="switch">
          <input type="checkbox" onChange={handleThemeSwitch} />
          <span className="slider"></span>
        </label>
      </div>

      <TrendCard />

      <button
        onClick={() => setModalOpened(true)}
        className="text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa] hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer"
      >
        Share an experience!
      </button>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <NotificationModal modalOpened={notiModalOpened} setModalOpened={setNotiModalOpened}  notifications={notifications}/> 
    </div>
  );
};

export default RightSide;
