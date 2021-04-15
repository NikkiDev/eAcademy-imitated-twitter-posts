import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
const UserInfo = (props) => {
  return (
    <div className='user-info'>
      <p className='full-name'>
        {props.name}
        <span>@{props.userName}</span>
      </p>

      <button type='btn'>
        <HiDotsHorizontal />
      </button>
    </div>
  )
}

export default UserInfo
