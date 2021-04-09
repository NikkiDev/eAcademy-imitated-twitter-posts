import React from 'react'

const PostOptions = (props) => {
  return (
    <div className='post-options'>
      <div className='options-wrapper'>
        <span className='option-icon'>comment</span>
        <p className='stat-number'>2323</p>
      </div>
      <div className='options-wrapper'>
        <span className='option-icon'>retweet</span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
      </div>
      <div className='options-wrapper'>
        <span className='option-icon'>like</span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
      </div>
      <div className='options-wrapper'>
        <span className='option-icon'>share</span>
        <p className='stat-number'>{Math.floor(Math.random() * 1000)}</p>
      </div>
    </div>
  )
}

export default PostOptions
