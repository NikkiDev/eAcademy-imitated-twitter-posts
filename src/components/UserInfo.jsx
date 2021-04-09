import React, { useState, useEffect } from 'react'

const UserInfo = (props) => {
  const { users, userId, id } = props
  return (
    <div className='user-info'>
      <img className='user-img' src='#' alt='user-image' />
      {/* <p className='full-name'>{users[userId - 1].name}</p>
      <p className='user-name'>@{users[userId - 1].username}</p> */}
      <button type='btn'>...</button>
    </div>
  )
}

export default UserInfo
