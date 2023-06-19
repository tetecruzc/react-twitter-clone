import React from 'react'
import './TweetBox.css'
import { Button, Avatar } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1376636016438689794/3amP93Rp_400x400.jpg"/>
          <input type="text" placeholder="Whats's happening?" />
        </div>
        <input className='tweet-box__image-input' type="text" placeholder="Enter image URL" />
      <Button className='tweet-box__button'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox