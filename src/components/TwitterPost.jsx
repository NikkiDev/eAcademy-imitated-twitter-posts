import React, { useState, useEffect } from 'react'
import './TwitterPost.scss'
import PostContent from './PostContent'
import PostOptions from './PostOptions'
import UserInfo from './UserInfo'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
const photosUrl = 'https://jsonplaceholder.typicode.com/photos'
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const TwitterPost = () => {
  const [posts, setPosts] = useState([])
  const [photos, setPhotos] = useState([])
  const [comments, setComments] = useState([])
  const [users, setUsers] = useState([])

  const getData = async (url, cb) => {
    const response = await fetch(url)
    const data = await response.json()
    return cb(data)
  }

  useEffect(() => {
    getData(postsUrl, setPosts)
    getData(photosUrl, setPhotos)
    getData(commentsUrl, setComments)
    getData(usersUrl, setUsers)
  }, [])
  return (
    <div>
      {posts &&
        photos &&
        comments &&
        users &&
        posts.map((post) => {
          const { id, userId, body } = post
          return (
            <div key={id} className='post-wrapper'>
              <UserInfo id={id} users={users} userId={userId} />
              <PostContent body={body} photos={[photos]} />

              <PostOptions />
            </div>
          )
        })}
    </div>
  )
}

export default TwitterPost
