
import LeftPanel from "../../Components/Panels/LeftPanel";
import ProfilePanel from "../../Components/Panels/ProfilePanel";
import RightPanel from "../../Components/Panels/RightPanel";
import ShareModal from '../../Components/ShareModal/ShareModal';
import { useState } from "react";
const Profile = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <div className="homepage flex flex-col md:flex-row h-screen overflow-hidden">
                <LeftPanel />
                <ProfilePanel/>
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

export default Profile;
