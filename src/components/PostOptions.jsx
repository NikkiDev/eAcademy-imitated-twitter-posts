import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const PostOptions = (props) => {
  const commentNumber = props.comments.length
  return (
    <div className='post-options'>
      <div
        className='options-wrapper'
        onClick={
          !props.isComment
            ? (e) => props.showComments(e)
            : (e) => props.closeComments(e)
        }
      >
        <span className='option-icon'>
          <FaRegComment />
        </span>
        <p className='stat-number'>{commentNumber}</p>
      </div>

      <div className='options-wrapper' onClick={props.like}>
        {props.isLike ? (
          <div className='like'>
            <span className='option-icon'>
              <AiFillHeart />
            </span>
            <p className='stat-number'>Unlike</p>
          </div>
        ) : (
          <div className='like'>
            <span className='option-icon'>
              <AiOutlineHeart />
            </span>
            <p className='stat-number'>Like</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostOptions
