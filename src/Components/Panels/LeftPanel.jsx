// LeftPanel.js
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Noti from "../../img/bell-filled.png";
import Setting from "../../img/setting-filled.png";
import Home from "../../img/home-filled.png";
import Logo from "../../img/logo.png";
import User from "../../img/user.png";
import Profile from "../../img/profile-img.jpg";
import FollowersCard from "../../Components/FollowersCard/FollowersCard";
import NotificationModal from "../../Components/NotificationModal/NotificationModal";
import SettingsModal from "../../Components/SettingsModal/SettingsModal";
import "./darkmode.css";
const LeftPanel = ({ follow }) => {
  const [theme, setTheme] = useState(null);
  const [notiModalOpened, setNotiModalOpened] = useState(false);
  const [settingsModalOpened, setSettingsModalOpened] = useState(false);
  const [followingCount, setFollowingCount] = useState(() => {
    const savedCount = localStorage.getItem("followingCount");
    return savedCount ? JSON.parse(savedCount) : 1;
  });

  useEffect(() => {
    localStorage.setItem("followingCount", JSON.stringify(followingCount));
  }, [followingCount]);

  const handleFollow = () => {
    setFollowingCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
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
    <div className="leftpanel md:basis-1/4 grow border-r-2 border-gray-600 p-4 flex flex-col h-[30vh] md:h-auto overflow-y-auto">
      <div className="top-div flex items-center justify-between space-x-4 mb-4">
        <img src={Logo} alt="Logo" className="w-12 h-12" />
        <label className="switch ml-auto">
          <input type="checkbox" onChange={handleThemeSwitch} />
          <span className="slider"></span>
        </label>
      </div>

      <div>
        <Link
          to="/home"
          className="w-full flex items-center space-x-2 dark:text-white p-2 rounded-lg bg-white/70 dark:bg-slate-800"
        >
          <img src={Home} alt="home" className="w-[2.5rem] h-[2.5rem]" />
          <h1 className="font-semibold">Home</h1>
        </Link>
        <Link
          to="/profile"
          className="w-full flex items-center space-x-2 dark:text-white p-2 rounded-lg bg-white/70 dark:bg-slate-800 mt-4"
        >
          <img src={User} alt="profile" className="w-[2.5rem] h-[2.5rem]" />
          <h1 className="font-semibold">Profile</h1>
        </Link>

        <Link
          className="w-full flex items-center space-x-2 dark:text-white p-2 rounded-lg mt-4 bg-white/70 dark:bg-slate-800"
          onClick={() => setNotiModalOpened(true)}
        >
          <img
            src={Noti}
            alt="notifications"
            className="w-[2.5rem] h-[2.5rem]"
          />
          <h1 className="font-semibold">Notification</h1>
        </Link>
        {follow && (
          <div className="my-2">
            <FollowersCard onFollow={handleFollow} />
          </div>
        )}
      </div>

      <Link
        className="w-full flex items-center space-x-2 dark:text-white p-2 rounded-lg mt-auto bg-white/70 dark:bg-slate-800"
        onClick={() => setSettingsModalOpened(!settingsModalOpened)}
      >
        <img src={Setting} alt="settings" className="w-[2.2rem] h-[2.2rem]" />
        <h1 className="font-semibold">Setting</h1>
      </Link>

      <div className="w-full flex items-center justify-between dark:text-white p-2 rounded-lg mt-2 bg-white/70 dark:bg-slate-800">
        <div className="flex items-center space-x-2">
          <img
            src={Profile} // Replace with the user's profile image
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <div >
            <p className="font-semibold dark:text-white">Shaaz Jung</p>{" "}
            {/* Replace with the username */}
            <p className="text-sm text-gray-500">@shaazjung</p>{" "}
            {/* Replace with the user's handle */}
          </div>
        </div>
        <Link to="/Auth">
          <button className="text-m text-blue-600 font-semibold hover:text-blue-400">
            Logout
          </button>
        </Link>
      </div>

      {/* Modals */}
      <NotificationModal
        modalOpened={notiModalOpened}
        setModalOpened={setNotiModalOpened}
      />
      <SettingsModal
        isOpen={settingsModalOpened}
        onClose={() => setSettingsModalOpened(false)}
      />
    </div>
  );
};

export default LeftPanel;
