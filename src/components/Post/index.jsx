import {StyledDiv} from './styles'
import { IoHeartOutline,IoHeart } from "react-icons/io5";
import { useState } from 'react';

export default function Post(props){
    const {name,image,postContent,url,likes} = props

    const [like,setLike] = useState(true);

    return(
        <StyledDiv>
            <div className='user-like'>
                <img src={image} className='user-picture'/>
                {
                    like ?
                    <div className='like'>
                        <IoHeartOutline className='heart-unchecked' onClick={()=>{setLike(!like)}}/>
                        <p className='like-name'>{likes}likes</p>
                    </div>
                    :
                    <div className='like'>
                        <IoHeart className='heart-checked'onClick={()=>{setLike(!like)}}/>
                        <p className='like-name'>{likes}likes</p>
                    </div>
                    
                }
            </div>
            <div className='content-post'>
                <div className='post'>
                    <p className='name'>{name}</p>
                    <p className='content'>{postContent}</p>
                </div>
                <div className='url'>
                    <a src={url} alt="URL post">{url}</a>
                </div>
            </div>
        </StyledDiv>
    )
}