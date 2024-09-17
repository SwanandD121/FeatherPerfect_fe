import React from 'react'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <div className="Posts flex flex-col gap-4">
        {PostsData.map((post, id) => {
            return <Post data={post} id={id} />
        })}
    </div>
  )
}

export default Posts
