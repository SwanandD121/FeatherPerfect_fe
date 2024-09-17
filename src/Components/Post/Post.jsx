import React from 'react'
import Comment from '../../img/comment-filled.png'
import Share from '../../img/share-filled.png'
import Heart from '../../img/heart-filled.png'
import NotLike from '../../img/heart.png'

const Post = ({data}) => {
  return (
    <div className="Post flex flex-col gap-3  bg-white/70 dark:bg-slate-800 rounded-3xl p-5">

        <div className="detail flex flex-col ml-2">
            <span className='dark:text-white'><b>{data.name}</b></span>
            <span className='dark:text-white/80'> {data.desc}</span>
        </div>

        <img src={data.img} alt="" className="rounded-lg object-cover   max-h-fi" />


        <div className="postReact flex gap-4 hover:cursor-pointer ml-2 ">
            <img src={data.liked?Heart: NotLike} alt="" className='w-8 h-8'/>
            <img src={Comment} alt="" className='w-8 h-8' />
            <img src={Share} alt="" className='w-8 h-8'/>
        </div>

        <span className="ml-2 text-sm dark:text-white"><b>{data.likes}</b> Likes </span>

    </div>
  )
}

export default Post
