// MiddlePanel.js
import PostShare from '../../Components/PostShare/PostShare';
import Posts from "../../Components/Posts/Posts";

const MiddlePanel = () => {
    return (
        <div className="midpanel md:basis-2/4 grow border-r-2 border-gray-600 overflow-y-auto flex flex-col h-[70vh] md:h-full">
            <div className="mt-4 pb-4 mx-2 border-b-2 border-gray-600">
                <PostShare />
            </div>

            {/* Scrollable post area */}
            <div className="mt-4 mx-2 px-10 overflow-y-scroll flex-grow pb-10">
                <Posts />
            </div>
        </div>
    );
};

export default MiddlePanel;
