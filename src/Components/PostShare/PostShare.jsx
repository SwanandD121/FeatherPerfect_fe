import React, {useState, useRef} from 'react'
import profileimg from '../../img/profile-img.jpg'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilTimesSquare } from '@iconscout/react-unicons'

const PostShare = () => {

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };


  return (
    <div className="postShare flex justify-between items-cente rounded-3xl p-4 gap-4 bg-white/70 dark:bg-slate-800">
        <img src={profileimg} alt="" className='rounded-full w-12 h-12 border-2 border-[#1060d7] shadow-md' />

        <div className='w-full flex flex-col items-center gap-4'>
            <input type="text" placeholder="What's Happening..." className='w-full h-10 mt-1 dark:text-white bg-gray-200/50 dark:bg-slate-700 border-2 dark:border-none rounded-lg outline-none p-2' />

            <div className="postOptions flex w-full justify-between items-center text-sm">
                <div className="option flex items-center font-semibold text-green-500 hover:cursor-pointer" onClick={()=>imageRef.current.click()}>
                    <UilScenery className=""/>Photo
                </div>

                <div className="option flex items-center font-semibold text-blue-500 hover:cursor-pointer">
                    <UilPlayCircle className=""/>Video
                </div>

                <div className="option flex items-center font-semibold text-red-500 hover:cursor-pointer">
                    <UilLocationPoint className=""/>Location
                </div>

                <div className="option flex items-center font-semibold text-yellow-500 hover:cursor-pointer">
                    <UilSchedule className=""/>Schedule
                </div>

                <button className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2  hover:border-2 dark:border-2 dark:border-black/90 dark:hover:border-[#2eaafa]   hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-transparent hover:to-transparent hover:text-[#297eff] hover:cursor-pointer'>
                    Share
                </button>

                <div >
                    <input type="file" 
                           name="myImage" 
                           ref={imageRef} 
                           onChange={onImageChange}
                           style={{display: "none"}}
                    />
                </div>
            </div>

            {image && (
                <div className="previewImage relative">
                    <UilTimesSquare onClick={() => setImage(null)} className='absolute cursor-pointer shadow  right-1 top-1' />
                    <img src={image.image} alt="" className='w-full max-h-80 object-cover rounded-md'/>
                </div>
            )}

        </div>

        
    </div>
  )
}

export default PostShare
