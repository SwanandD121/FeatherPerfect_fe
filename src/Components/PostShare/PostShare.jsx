import React, { useState, useRef } from 'react';
import profileimg from '../../img/profile-img.jpg';
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimesSquare } from '@iconscout/react-unicons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker CSS

const PostShare = () => {
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [location, setLocation] = useState("");
    const [schedule, setSchedule] = useState(null); // For storing scheduled date
    const [showDatePicker, setShowDatePicker] = useState(false); // Toggle for showing the date picker
    const imageRef = useRef();
    const videoRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    const onVideoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let vid = event.target.files[0];
            setVideo({
                video: URL.createObjectURL(vid),
            });
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const onShare = () => {
        alert('Content Shared Successfully!');
        // Perform any additional share logic here
    };

    return (
        <div className="postShare flex justify-between items-center rounded-3xl p-4 gap-4 bg-white/70 dark:bg-slate-800">
            <img src={profileimg} alt="" className='rounded-full w-12 h-12 border-2 border-[#1060d7] shadow-md' />

            <div className='w-full flex flex-col items-center gap-4'>
                <input 
                    type="text" 
                    placeholder="What's Happening..." 
                    className='w-full h-10 mt-1 dark:text-white bg-gray-200/50 dark:bg-slate-700 border-2 dark:border-none rounded-lg outline-none p-2' 
                />

                <div className="postOptions flex w-full justify-between items-center text-sm space-x-4">
                    {/* Image Upload */}
                    <div 
                        className="option flex items-center font-semibold text-green-500 hover:cursor-pointer" 
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery className=""/> Photo
                    </div>

                    {/* Video Upload */}
                    <div 
                        className="option flex items-center font-semibold text-blue-500 hover:cursor-pointer" 
                        onClick={() => videoRef.current.click()}
                    >
                        <UilPlayCircle className=""/> Video
                    </div>

                    {/* Location Capture */}
                    <div 
                        className="option flex items-center font-semibold text-red-500 hover:cursor-pointer" 
                        onClick={getLocation}
                    >
                        <UilLocationPoint className=""/> Location
                    </div>

                    {/* Schedule Option */}
                    <div 
                        className="option flex items-center font-semibold text-yellow-500 hover:cursor-pointer" 
                        onClick={() => setShowDatePicker(!showDatePicker)} // Toggle date picker visibility
                    >
                        <UilSchedule className=""/> Schedule
                    </div>

                    {/* Share Button */}
                    <button 
                        onClick={onShare} 
                        className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa] hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer'
                    >
                        Share
                    </button>

                    {/* Hidden Inputs for Image and Video Upload */}
                    <input 
                        type="file" 
                        name="myImage" 
                        ref={imageRef} 
                        onChange={onImageChange}
                        style={{ display: "none" }} 
                    />
                    <input 
                        type="file" 
                        name="myVideo" 
                        ref={videoRef} 
                        onChange={onVideoChange}
                        style={{ display: "none" }} 
                    />
                </div>

                {/* Image Preview */}
                {image && (
                    <div className="previewImage relative">
                        <UilTimesSquare onClick={() => setImage(null)} className='absolute cursor-pointer shadow right-1 top-1' />
                        <img src={image.image} alt="" className='w-full max-h-80 object-cover rounded-md'/>
                    </div>
                )}

                {/* Video Preview */}
                {video && (
                    <div className="previewVideo relative">
                        <UilTimesSquare onClick={() => setVideo(null)} className='absolute cursor-pointer shadow right-1 top-1' />
                        <video src={video.video} controls className='w-full max-h-80 object-cover rounded-md' />
                    </div>
                )}

                {/* Location Preview */}
                {location && (
                    <div className="locationPreview w-full flex justify-start text-sm text-gray-700 dark:text-gray-300 mt-2 pl-5 ml-24"> {/* Centered */}
                        Location: <span className="ml-2">{location}</span>
                    </div>
                )}

                {/* Schedule Date Picker */}
                {showDatePicker && (
                    <div className="schedulePicker mt-2 mr-12">
                        <DatePicker
                            selected={schedule}
                            onChange={(date) => {
                                setSchedule(date);
                                setShowDatePicker(false); // Close the date picker after selection
                            }} // Set selected date and close picker
                            showTimeSelect
                            dateFormat="Pp" // Format for date and time
                            className="dark:text-white bg-gray-200/50 dark:bg-slate-700 border-2 dark:border-none rounded-lg outline-none p-2 mt-2 w-full"
                        />
                    </div>
                )}

                {/* Display Scheduled Date */}
                {schedule && (
                    <div className="schedulePreview w-full flex justify-start text-sm text-gray-700 dark:text-gray-300 mt-2 pl-8 ml-24 "> {/* Centered */}
                        Scheduled for: <span className="ml-2">{schedule.toLocaleString()}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
