import React, { useState } from 'react'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart, AiOutlineUpload } from 'react-icons/ai'

const PostOptions = (props) => {
  const showComments = (e) => {
    e.stopPropagation()
    props.setIsComment(!props.isComment)
  }
  return (
    <div className='post-options'>
      <div className='options-wrapper' onClick={(e) => showComments(e)}>
        <span className='option-icon'>
          <FaRegComment />
        </span>
        <p className='stat-number'>5</p>
      </div>
      <div className='options-wrapper'>
        <span className='option-icon'>
          <FaRetweet />
        </span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
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
      <div className='options-wrapper'>
        <span className='option-icon'>
          <AiOutlineUpload />
        </span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
      </div>
    </div>
  )
}

export default PostOptions
