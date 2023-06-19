import React from 'react'
import './Feed.css'
import TweetBox from '../tweetbox/TweetBox.jsx'
import TweetPost from '../tweetpost/TweetPost'

function Feed() {
  return (
    <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox/>
        <TweetPost/>
        <TweetPost/>
        <TweetPost/>
        <TweetPost/>
        <TweetPost/>
    </div>
  )
}

export default Feed