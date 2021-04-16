import React from 'react'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart, AiOutlineUpload } from 'react-icons/ai'

const PostOptions = (props) => {
  return (
    <div className='post-options'>
      <div
        className='options-wrapper'
        onClick={() => props.setIsComment(!props.isComment)}
      >
        <span className='option-icon'>
          <FaRegComment />
        </span>
        <p className='stat-number'>2323</p>
      </div>
      <div className='options-wrapper'>
        <span className='option-icon'>
          <FaRetweet />
        </span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
      </div>
      <div className='options-wrapper'>
        <span className='option-icon'>
          <AiOutlineHeart />
        </span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
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
