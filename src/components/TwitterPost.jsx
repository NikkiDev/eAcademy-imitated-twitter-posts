import React, { useState, useEffect } from 'react'
import './TwitterPost.scss'
import PostContent from './PostContent'
import PostOptions from './PostOptions'
import UserInfo from './UserInfo'
import PostComment from './PostComment'

// const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
// const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
// const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
// const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const TwitterPost = (props) => {
  const [post, setPost] = useState('')
  const [pic, setPic] = useState('')
  const [comments, setComments] = useState(null)
  const [user, setUser] = useState('')
  const [isComment, setIsComment] = useState(false)

  const getPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const data = await response.json()
    return data
  }

  const getComment = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    )
    const data = await response.json()
    return data
  }
  const getUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    const data = await response.json()
    return data
  }
  const getPhoto = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    )
    const data = await response.json()
    return data
  }
  const PostCompl = async (id) => {
    const newPost = await getPost(id)
    const newPhoto = await getPhoto(newPost.id)
    const newUser = await getUser(newPost.userId)
    const newComment = await getComment(newPost.userId)
    setPost(newPost)
    setUser(newUser)
    setComments(newComment)
    setPic(newPhoto)
  }
  useEffect(() => {
    PostCompl(props.postId)
  }, [])
  return (
    post &&
    user &&
    comments &&
    pic && (
      <article className='post'>
        <div className='profile'>
          <h1>{user.name.charAt(0)}</h1>
        </div>
        <div className='post-wrapper'>
          <UserInfo
            name={user.name}
            userName={user.username}
            comments={comments}
          />
          <PostContent title={post.title} body={post.body} postPic={pic.url} />
          <PostOptions setIsComment={setIsComment} isComment={isComment} />
          {isComment &&
            comments.map((comment, idx) => (
              <div key={idx} className='comment-section'>
                <div className='profile'>
                  <h1>{comment.email.charAt(0)}</h1>
                </div>
                <div>
                  <PostComment
                    name={comment.email}
                    body={comment.body}
                    userName={comment.email}
                  />
                </div>
              </div>
            ))}
        </div>
      </article>
    )
  )
}

export default TwitterPost
