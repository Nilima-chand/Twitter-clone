import React from 'react'
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import { Height, Search } from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
       <div className='widgets_input'>
        <Search className='widgets_SearchIcon'/>
         <input placeholder = 'Search Twitter' type='text' />
       </div>
       <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>
       </div>
       <TwitterTweetEmbed tweetId={'132135180806798343'}/>
       <TwitterTimelineEmbed
       sourceType = 'profile'
       srceenName='akky_im'
       options={{Height:400}}
       />
       <TwitterShareButton
       url={'http://facebook.com/akkyProjects'}
       options={{text:'Suscribe my youtube channel'}}
       />
    </div>
  )
}

export default Widgets
