// RightPanel.js
import { useState } from "react";
import LogoSearch from "../../Components/LogoSearch/LogoSearch";
import TrendCard from '../../Components/TrendCard/TrendCard';
import ExperienceModal from '../../Components/ExperienceModal/ExperienceModal';

const RightPanel = () => {
    const [experienceModalOpened, setExperienceModalOpened] = useState(false);

    return (
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

            <ExperienceModal
                isOpen={experienceModalOpened}
                onClose={() => setExperienceModalOpened(false)}
            />
        </div>
    );
};

export default RightPanel;
