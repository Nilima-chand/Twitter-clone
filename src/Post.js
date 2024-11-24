import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
function Post() {
  return (
    <div className='post'>
       <div className='post_avtar'>
         <Avatar/>
       </div>
       <div className='post_body'>
         <div className='post_header'>
            <div className='post_headerText'>
               <h3>DisplayName
               <span className='post_headerSpecial'>
                <VerifiedUserIcon className='post_badge'/>
                @username
               </span>
               </h3>
            </div>
            <div className='post_headerDescription'>
              <p>This is message</p>
            </div>
         </div>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlUocy_mMRU5ECr3MMo7jrSk8BUIw4uLcVCBifaKK8ECdGV9efqjHn482ZQ&s'
         alt=''
         />
         <div className='Post_footer'>
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small'/>
          <FavoriteBorder fontSize='small'/>
          <Publish fontSize='small'/>
         </div>
       </div>
    </div>
  )
}

export default Post
