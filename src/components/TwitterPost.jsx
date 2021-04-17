import React, { useState, useEffect, useRef } from 'react'
import './TwitterPost.scss'
import PostContent from './PostContent'
import PostOptions from './PostOptions'
import UserInfo from './UserInfo'
import PostComment from './PostComment'

const TwitterPost = (props) => {
  const postRef = useRef(null)
  const [post, setPost] = useState('')
  const [pic, setPic] = useState('')
  const [comments, setComments] = useState(null)
  const [user, setUser] = useState('')
  const [isComment, setIsComment] = useState(false)
  const [isPost, setIsPost] = useState(true)
  const showPost = () => {
    console.log(isPost)
    setIsPost(!isPost)
    console.log(isPost)
    console.log(props.posts)
    const showPost = props.posts.filter((post) => post.id === props.postId)
    isPost ? props.setPosts(showPost) : props.setPosts(props.posts)
  }
  const [isLike, setIsLiked] = useState(false)

  const like = (e) => {
    e.stopPropagation()
    setIsLiked(!isLike)
  }
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
    const newComment = await getComment(newPost.id)
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
      <article ref={postRef} className='post' onClick={showPost}>
        <div className='somepost'>
          <div className='profile'>
            <h1>{user.name.charAt(0)}</h1>
          </div>
          <div className='post-wrapper'>
            <UserInfo
              name={user.name}
              userName={user.username}
              showPost={showPost}
              isLike={isLike}
              like={like}
            />
            <PostContent
              title={post.title}
              body={post.body}
              postPic={pic.url}
            />
            <PostOptions
              setIsComment={setIsComment}
              isComment={isComment}
              isLike={isLike}
              like={like}
            />
          </div>
        </div>

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
      </article>
    )
  )
}

export default TwitterPost
