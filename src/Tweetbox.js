import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './Tweet.css';

function Tweetbox() {
  return (
    <div className='tweetbox'>
      <form>

        <div className='tweetbox_input'>
          <Avatar
          src='data:image/jpeg;base64,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'
          />
          <input type='text' placeholder='Whats happenging ' />
          
        </div>
        <input 
        className='tweetbox_imageInput'
        placeholder='optional: Enter image URL'
        />
        <Button 
        className='tweetbox_tweetButton'>Tweet</Button>
        
      </form>
    </div>
  )
}

export default Tweetbox
