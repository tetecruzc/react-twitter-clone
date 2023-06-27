import React, { useState } from 'react'
import './TweetBox.css'
import { Button, Avatar } from "@mui/material";
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

function TweetBox() {
  const [newTweet, setNewTweet] = useState("")
  const [newTweetImage, setNewTweetImage] = useState("")

  const sendNewTweet = (e) => {
    e.preventDefault()

    addDoc(collection(db, 'posts'), {
      name: 'Juan Lyon',
      username: 'juanlyon12',
      verified: true,
      textContent: newTweet,
      image: newTweetImage
    });
    setNewTweet("")
    setNewTweetImage("")
  }

  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1376636016438689794/3amP93Rp_400x400.jpg"/>
          <input onChange={e => setNewTweet(e.target.value)} value={newTweet} type="text" placeholder="Whats's happening?" />
        </div>
        <input onChange={e => setNewTweetImage(e.target.value)} value={newTweetImage} className='tweet-box__image-input' type="text" placeholder="Enter image URL" />
      <Button onClick={sendNewTweet} type="submit" className='tweet-box__button'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox