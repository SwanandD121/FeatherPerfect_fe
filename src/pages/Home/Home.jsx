// Home2.js
import LeftPanel from "../../Components/Panels/LeftPanel";
import MiddlePanel from "../../Components/Panels/MiddlePanel";
import RightPanel from "../../Components/Panels/RightPanel";
import ShareModal from '../../Components/ShareModal/ShareModal';
import { useState } from "react";
const Home = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <div className="homepage flex flex-col md:flex-row h-screen overflow-hidden">
                <LeftPanel follow={true}/>
                <MiddlePanel />
                <RightPanel />
            </div>

            {/* Share Modal */}
            <ShareModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
        </>
    );
};

export default Home;
