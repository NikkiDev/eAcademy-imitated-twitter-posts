import React from 'react'
import PostContent from './PostContent'
import PostOptions from './PostOptions'
import UserInfo from './UserInfo'
const PostComment = (props) => {
  return (
    <div className='post-wrapper'>
      <UserInfo
        name={props.name}
        userName={props.userName}
        showPost={props.showPost}
        like={props.like}
        isLike={props.isLike}
      />
      <PostContent
        body={props.body}
        title={props.title}
        postPic={props.postPic}
      />
      <PostOptions
        showComments={props.showComments}
        isComment={props.isComment}
        isLike={props.isLike}
        like={props.like}
        closeComments={props.closeComments}
        comments={props.comments}
      />
    </div>
  )
}

export default PostComment
