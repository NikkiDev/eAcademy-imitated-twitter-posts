import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import TwitterPost from './TwitterPost'
import { AiOutlineHome, AiOutlineNumber } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiEnvelope, BiBookmark } from 'react-icons/bi'
import { RiFileListLine } from 'react-icons/ri'
import { CgProfile, CgMoreO } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
const TwitterNewsFeed = () => {
  const [posts, setPosts] = useState([])
  const [postsArr, setPostsArr] = useState(null)

  const getPosts = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = response.json()
    return data
  }

  useEffect(() => {
    const newPosts = async () => {
      const newPostsArr = await getPosts()
      setPosts(newPostsArr)
      setPostsArr(newPostsArr)
    }
    newPosts()
  }, [])
  return (
    <div className='news-feed'>
      <header className='header'>
        <div className='logo'>
          <FaTwitter />
        </div>
        <ul>
          <li>
            <AiOutlineHome />
            <span>home</span>
          </li>
          <li>
            <AiOutlineNumber />
            <span>explore</span>
          </li>
          <li>
            <IoIosNotificationsOutline />
            <span>notofications</span>
          </li>
          <li>
            <BiEnvelope />
            <span>messages</span>
          </li>
          <li>
            <BiBookmark />
            <span>bookmarks</span>
          </li>
          <li>
            <RiFileListLine />
            <span>lists</span>
          </li>
          <li>
            <CgProfile />
            <span>profile</span>
          </li>
          <li>
            <CgMoreO />
            <span>more</span>
          </li>
        </ul>
        <button type='button'>Tweet</button>
      </header>
      <div>
        {!postsArr ? (
          <div className='loading'>
            <Loader type='Oval' color='#00BFFF' height={50} width={50} />
          </div>
        ) : (
          postsArr.map((post) => {
            return (
              <TwitterPost
                key={post.id}
                postId={post.id}
                posts={posts}
                postsArr={postsArr}
                setPostsArr={setPostsArr}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default TwitterNewsFeed
