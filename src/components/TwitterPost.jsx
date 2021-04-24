import React, { useState, useEffect, useRef } from 'react'
import './TwitterPost.scss'
import PostContent from './PostContent'
import UserInfo from './UserInfo'
import PostComment from './PostComment'

const TwitterPost = (props) => {
  const commentRef = useRef(null)
  const [post, setPost] = useState('')
  const [pic, setPic] = useState('')
  const [comments, setComments] = useState(null)
  const [user, setUser] = useState('')
  const [isPost, setIsPost] = useState(false)
  const [isLike, setIsLiked] = useState(false)
  const [isComment, setIsComment] = useState(false)
  // showPost <<< amit xdeba calke postis gamoyofa
  const showPost = () => {
    const singlePost = props.postsArr.filter((post) => post.id === props.postId)
    const toggle = !isPost
    setIsPost(toggle)
    toggle ? props.setPostsArr(singlePost) : props.setPostsArr(props.posts)
  }
  // <<<<<<<<<<<<<<<<<<<<<<<<<
  const closeComments = (e) => {
    e.stopPropagation()
    if (commentRef.current && !commentRef.current.contains(e.target)) {
      setIsComment(false)
    }
  }
  const showComments = (e) => {
    e.stopPropagation()
    setIsComment(!isComment)
  }

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
  useEffect(() => {
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
    PostCompl(props.postId)
  }, [props.postId])
  return (
    post &&
    user &&
    comments &&
    pic && (
      <article
        className={`wholepost ${isComment ? 'point' : ''}`}
        onClick={closeComments}
      >
        <div className={`${isComment ? 'background' : ''}`}></div>
        <div className='post' onClick={showPost}>
          <div className='somepost'>
            <div className='profile'>
              <h1>{user.name.charAt(0)}</h1>
            </div>
            <div className='post-wrapper'>
              <PostComment
                name={user.name}
                userName={user.username}
                showPost={showPost}
                isLike={isLike}
                like={like}
                title={post.title}
                body={post.body}
                postPic={pic.url}
                setIsComment={setIsComment}
                isComment={isComment}
                showComments={showComments}
                closeComments={closeComments}
                comments={comments}
              />
            </div>
          </div>
        </div>
        <div className='comment' ref={commentRef}>
          {isComment &&
            comments.map((comment, idx) => (
              <div key={idx}>
                <div className='profile'>
                  <h1>{comment.email.charAt(0)}</h1>
                </div>
                <div className='comment-section'>
                  <UserInfo name={comment.email} userName={comment.email} />
                  <PostContent body={comment.body} title={comment.name} />
                </div>
              </div>
            ))}
        </div>
      </article>
    )
  )
}

export default TwitterPost
