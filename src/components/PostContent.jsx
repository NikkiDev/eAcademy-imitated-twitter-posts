import React from 'react'

const PostContent = (props) => {
  const { id, title, body, postImg } = props
  return (
    <div key={id} className='post-content'>
      <div>
        <p className='post-text'>{body}</p>
      </div>
      <div className='img'>
        <img className='post-img' src={postImg} alt='some-picture' />
      </div>
    </div>
  )
}

export default PostContent
