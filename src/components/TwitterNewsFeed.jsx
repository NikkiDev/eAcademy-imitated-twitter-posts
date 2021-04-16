import React from 'react'
import TwitterPost from './TwitterPost'
const TwitterNewsFeed = () => {
  const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <div>
      {someArr.map((idx) => {
        return <TwitterPost key={idx} postId={idx} />
      })}
    </div>
  )
}

export default TwitterNewsFeed
