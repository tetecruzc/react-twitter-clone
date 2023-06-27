import React, {forwardRef} from 'react'
import './TweetPost.css'
import { Avatar } from "@mui/material";
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, Verified } from '@mui/icons-material';
const TweetPost = forwardRef((
    {
        name,
        username,
        avatar,
        verified,
        textContent,
        image
    },
    ref
) => {
 
  return (
    <div className='tweet-post' ref={ref}>
        <div className="tweet-post__avatar">
          <Avatar src={avatar}/>
        </div>
        <div className="tweet-post__body">
            <div className="tweet-post__header">
                <div className="tweet-post__header-text">
                    <h3>{name}{" "}
                        <span className='tweet-post__username'>
                        { verified && <Verified className='tweet-post__badge'/>}    
                        {" "}@{username}</span>
                    </h3>
                </div>
                <div className="tweet-post__header-description">
                    <p>{textContent}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="tweet-post__footer">
                <ChatBubbleOutline fontSize='small'/>
                <Repeat fontSize='small'/>
                <FavoriteBorder fontSize='small'/>
                <Publish fontSize='small'/>
            </div>
        </div>
    </div>
  )
})

export default TweetPost