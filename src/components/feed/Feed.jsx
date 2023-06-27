import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from '../tweetbox/TweetBox.jsx'
import TweetPost from '../tweetpost/TweetPost'
import db from '../../firebase'
import { collection, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  },[])

  return (
    <div className="feed">
        <div className="feed__header">
            <h2>Home</h2>
        </div>
        <TweetBox/>
        <FlipMove>
          {posts.map((post, index) => (
            <TweetPost
              key={index}
              name={post.name}
              username={post.username}
              avatar={post.avatar}
              verified={post.verified}
              textContent={post.textContent}
              image={post.image}
            />
          ))}
        </FlipMove>
    </div>
  )
}

export default Feed