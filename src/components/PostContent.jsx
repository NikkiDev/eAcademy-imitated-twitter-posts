import React from 'react'

const PostContent = (props) => {
  const { id, userId, body } = props
  return (
    <div key={id} className='post-content'>
      <p className='post-text'>{body}</p>
      <img
        className='post-img'
        src='https://cdn.shopify.com/s/files/1/0865/4558/products/large-lineup-lead__lead-1_grande.jpg?v=1432061824'
        alt='post-image'
      />
    </div>
  )
}

export default PostContent
