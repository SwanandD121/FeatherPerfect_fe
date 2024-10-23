import { Link } from "react-router-dom";
import Noti from "../../img/bell-filled.png";
import Setting from "../../img/setting-filled.png";
import Home from "../../img/home-filled.png";
import { useState, useEffect } from "react";
import Logo from '../../img/logo.png';
import User from '../../img/user.png';
import LogoSearch from "../../Components/LogoSearch/LogoSearch";
import PostShare from '../../Components/PostShare/PostShare';
import FollowersCard from "../../Components/FollowersCard/FollowersCard";
import Posts from "../../Components/Posts/Posts";
import TrendCard from '../../Components/TrendCard/TrendCard';
import ShareModal from '../../Components/ShareModal/ShareModal';
import NotificationModal from '../../Components/NotificationModal/NotificationModal';
import SettingsModal from '../../Components/SettingsModal/SettingsModal';
import ExperienceModal from '../../Components/ExperienceModal/ExperienceModal';

const Home2 = () => {
    const [theme, setTheme] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [notiModalOpened, setNotiModalOpened] = useState(false);
    const [settingsModalOpened, setSettingsModalOpened] = useState(false);
    const [experienceModalOpened, setExperienceModalOpened] = useState(false);

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
        <>
            <div className="homepage flex flex-col md:flex-row h-screen overflow-hidden">
                {/* Left Panel */}
                <div className="leftpanel md:basis-1/4 grow border-r-2 border-gray-600 p-4 flex flex-col h-[30vh] md:h-auto overflow-y-auto">
                    <div className="top-div flex items-center justify-between space-x-4 mb-4">
                        <img src={Logo} alt="" className="w-12 h-12" />
                        <label className="switch ml-auto">
                            <input type="checkbox" onChange={handleThemeSwitch} />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div className="">
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
                            <img src={Noti} alt="notifications" className="w-[2.5rem] h-[2.5rem]" />
                            <h1 className="font-semibold">Notification</h1>
                        </Link>

                        <div className="my-6">
                            <FollowersCard onFollow={handleFollow} />
                        </div>
                    </div>

                    {/* Settings button pushed to the bottom */}
                    <Link
                        className="w-full flex items-center space-x-2 dark:text-white p-2 rounded-lg mt-auto bg-white/70 dark:bg-slate-800"
                        onClick={() => setSettingsModalOpened(!settingsModalOpened)}
                    >
                        <img src={Setting} alt="settings" className="w-[2.2rem] h-[2.2rem]" />
                        <h1 className="font-semibold">Setting</h1>
                    </Link>
                </div>

                {/* Middle Panel */}
                <div className="midpanel md:basis-2/4 grow border-r-2 border-gray-600 overflow-y-auto flex flex-col h-[70vh] md:h-full">
                    <div className="mt-4 pb-4 mx-2 border-b-2 border-gray-600">
                        <PostShare />
                    </div>

                    {/* Scrollable post area */}
                    <div className="mt-4 mx-2 px-10 overflow-y-scroll flex-grow pb-10">
                        <Posts />
                    </div>
                </div>

                {/* Right Panel */}
                <div className="rightpanel hidden md:flex md:basis-1/4 grow p-4 flex-col h-[30vh] md:h-auto overflow-y-auto">
                    <LogoSearch />
                    <div className="trend mt-8">
                        <TrendCard />
                    </div>
                    <button
                        onClick={() => setExperienceModalOpened(true)}
                        className="w-full mt-auto dark:text-white p-2 bg-gradient-to-r from-[#2eaafa] to-[#1060d7] rounded-lg shadow-md border-2 hover:border-2 dark:border-black/90 dark:hover:border-[#2eaafa] hover:border-[#2eaafa] hover:bg-gradient-to-l hover:text-[#297eff] hover:cursor-pointer"
                    >
                        Share an experience!
                    </button>
                </div>
            </div>

            {/* Modals */}
            <ShareModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
            <NotificationModal
                modalOpened={notiModalOpened}
                setModalOpened={setNotiModalOpened}
            />
            <SettingsModal
                isOpen={settingsModalOpened}
                onClose={() => setSettingsModalOpened(false)}
            />
            <ExperienceModal
                isOpen={experienceModalOpened}
                onClose={() => setExperienceModalOpened(false)}
            />
        </>
    );
};

export default Home2;
