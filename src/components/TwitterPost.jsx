import React, { useState, useEffect } from 'react'
import PostContent from './PostContent'
import './TwitterPost.scss'
import PostOptions from './PostOptions'
import UserInfo from './UserInfo'
// const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
// const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
// const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
// const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const TwitterPost = (postId) => {
  const [post, setPost] = useState('')
  const [pic, setPic] = useState('')
  const [comment, setComment] = useState('')
  const [user, setUser] = useState('')

  const getPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    const data = await response.json()
    return data
  }

  const getComment = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`
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
  const PostComl = async (id) => {
    const newPost = await getPost(id)
    const newPhoto = await getPhoto(newPost.id)
    const newUser = await getUser(newPost.userId)
    const newComment = await getComment(newUser.userId)
    setPost(newPost)
    setUser(newUser)
    setComment(newComment)
    setPic(newPhoto)
  }
  useEffect(() => {
    PostComl(5)
  }, [])
  return (
    post &&
    user &&
    comment &&
    pic && (
      <article className='post'>
        <div className='profile'>
          <h1>{user.name.charAt(0)}</h1>
        </div>
        <div className='post-wrapper'>
          <UserInfo name={user.name} userName={user.username} />
          <PostContent
            id={post.id}
            title={post.title}
            body={post.body}
            postImg={pic.url}
          />
          <PostOptions />
        </div>
      </article>
    )
  )
}

export default TwitterPost
