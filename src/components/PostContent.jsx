import React from 'react'

const PostContent = (props) => {
  const { title, body, postPic } = props
  return (
    <div className='post-content'>
      <h4 className='post-text'>{title}</h4>
      <p className='post-text'>{body}</p>
      {postPic && (
        <div className='img'>
          <img className='post-img' src={postPic} alt='some-pic' />
        </div>
      )}
    </div>
  )
}

export default PostContent
