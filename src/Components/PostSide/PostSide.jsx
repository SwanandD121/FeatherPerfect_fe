import React from 'react'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'


const PostSide = () => {
  return (
    <div className="postSide flex flex-col overflow-auto h-full gap-4">
        <PostShare/>
        <Posts/>

    </div>
  )
}

export default PostSide
