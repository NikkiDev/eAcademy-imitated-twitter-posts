import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
const UserInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openBtn = (e) => {
    e.stopPropagation()
    setIsOpen(true)
  }
  return (
    <div className='user-info'>
      <p className='full-name'>
        {props.name}
        <span>@{props.userName}</span>
      </p>
      {!isOpen ? (
        <button type='btn' onClick={(e) => openBtn(e)}>
          <HiDotsHorizontal />
        </button>
      ) : (
        <div className='dots'>
          {props.isLike ? (
            <div className='like' onClick={props.like}>
              <span className='option-icon'>
                <AiFillHeart />
              </span>
              <p className='stat-number'>Unlike</p>
            </div>
          ) : (
            <div className='like' onClick={props.like}>
              <span className='option-icon'>
                <AiOutlineHeart />
              </span>
              <p className='stat-number'>Like</p>
            </div>
          )}

          <button type='button' onClick={props.showPost}>
            tweet
          </button>
        </div>
      )}
    </div>
  )
}

export default UserInfo
