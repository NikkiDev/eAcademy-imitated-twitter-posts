import React from 'react'
import TwitterPost from './TwitterPost'
import { AiOutlineHome, AiOutlineNumber } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiEnvelope, BiBookmark } from 'react-icons/bi'
import { RiFileListLine } from 'react-icons/ri'
import { CgProfile, CgMoreO } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
const TwitterNewsFeed = () => {
  const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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
        {someArr.map((idx) => {
          return <TwitterPost key={idx} postId={idx} />
        })}
      </div>
    </div>
  )
}

export default TwitterNewsFeed
