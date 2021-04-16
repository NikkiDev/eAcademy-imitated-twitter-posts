import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
const UserInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(props.comments)
  return (
    <div className='user-info'>
      <p className='full-name'>
        {props.name}
        <span>@{props.userName}</span>
      </p>
      {!isOpen ? (
        <button type='btn' onClick={() => setIsOpen(true)}>
          <HiDotsHorizontal />
        </button>
      ) : (
        <div className='dots'>
          <button type='button'>Liked</button>
          <button type='button'>button</button>
        </div>
      )}
    </div>
  )
}

export default UserInfo
