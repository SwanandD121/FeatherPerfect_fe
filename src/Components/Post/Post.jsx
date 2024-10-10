import React, { useState, useEffect } from "react";
import Comment from "../../img/comment-filled.png";
import Share from "../../img/share-filled.png";
import Heart from "../../img/heart-filled.png";
import NotLike from "../../img/heart.png";

const Post = ({ data }) => {
  const [liked, setLiked] = useState(false); 
  const [likes, setLikes] = useState(0); 
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState(""); 
  const [commentshow, setShowComment] = useState(false); 

  
  useEffect(() => {
    
    if (data.liked) {
      setLiked(true); 
      setLikes(1); 
    } else {
      setLiked(false); 
      setLikes(0); 
    }
  }, [data.liked]);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => Math.max(prev - 1, 0)); 
    } else {
      setLikes((prev) => prev + 1); 
    }
    setLiked(!liked); 
  };

  const handleShowComment = () => {
    setShowComment((prev) => !prev); 
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault(); 
    if (newComment.trim() === "") return; 
    setComments((prev) => [...prev, newComment]); 
    setNewComment(""); 
  };

  const handleShare = () => {
    const postUrl = window.location.href; 
    if (navigator.share) {
      navigator
        .share({
          title: data.name,
          text: data.desc,
          url: postUrl,
        })
        .then(() => {
          console.log("Post shared successfully!"); 
        })
        .catch((error) => {
          console.error("Error sharing:", error); 
        });
    } else {
      navigator.clipboard
        .writeText(postUrl) 
        .then(() => {
        })
        .catch((error) => {
          console.error("Error copying link:", error); 
        });
    }
  };

  return (
    <div className="Post flex flex-col gap-3 bg-white/70 dark:bg-slate-800 rounded-3xl p-5">
      <div className="detail flex flex-col ml-2">
        <span className="dark:text-white">
          <b>{data.name}</b>
        </span>
        <span className="dark:text-white/80"> {data.desc}</span>
      </div>

      <img src={data.img} alt="" className="rounded-lg object-cover max-h-fi" />

      <div className="postReact flex gap-4 hover:cursor-pointer ml-2">
        <img
          src={liked ? Heart : NotLike}
          alt="Like Button"
          className="w-8 h-8"
          onClick={handleLike}
        />
        <img
          src={Comment}
          alt="Comment"
          className="w-8 h-8"
          onClick={handleShowComment}
        />
        <img
          src={Share}
          alt="Share"
          className="w-8 h-8"
          onClick={handleShare}
        />
      </div>

      <span className="ml-2 text-sm dark:text-white">
        <b>{likes}</b> Likes {/* Display likes count directly */}
      </span>

      {/* Comment Section */}
      <div className="comments mt-3">
        {comments.length > 0 && (
          <div className="comment-list ml-2">
            <b className="dark:text-white">Comments:</b>
            {comments.map((comment, index) => (
              <p key={index} className="text-slate-200">
                {comment}
              </p>
            ))}
          </div>
        )}

        {commentshow && (
          <form onSubmit={handleCommentSubmit} className="flex gap-2 mt-2 ml-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Post;
