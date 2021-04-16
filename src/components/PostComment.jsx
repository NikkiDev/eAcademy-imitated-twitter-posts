import React from 'react'
import PostContent from './PostContent'
import PostOptions from './PostOptions'
import UserInfo from './UserInfo'
const PostComment = (props) => {
  console.log(props)
  return (
    <div className='post-wrapper'>
      <UserInfo name={props.name} userName={props.userName} />
      <PostContent body={props.body} />
      <PostOptions />
    </div>
  )
}

export default PostComment
