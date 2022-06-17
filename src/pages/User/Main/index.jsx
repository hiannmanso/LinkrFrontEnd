import {StyledUser} from './styles'
import Post from '../../../components/Post'
import Trending from '../../../components/Trending'
import { useState,useEffect } from 'react';
import api from '../../../services/api';

export default function Main(){

    const [userInfo,setUserinfo] = useState([{name:null,picture:null}]);
    const [posts,setPosts] = useState([{description:null,url:null}]);

    async function loadUser(){
        //Alterar para carregar id dinamicamente 
        //Infomarçoes do usario
        const user = await api.getUserId(1);
        setUserinfo(user);
        const post = await api.getPostId(1);
        setPosts(post);
        console.log("Post->",post);
    }


    useEffect(() => {
        loadUser();
    }, []);

    return(
        <StyledUser>
            <div className='box-user'>
                <div className='user'>
                    <img src={userInfo[0].picture} className='user-image'/>
                    <p className='user-name'>{userInfo[0].name}'s posts</p>
                </div>
            </div>
            <div className='container'>
                <div className='box-post'>
                    {
                        posts.map((post,index)=>{
                            return(
                                <Post
                                    name={userInfo[0].name}
                                    image={userInfo[0].picture}
                                    postContent={post.description}
                                    url={post.url}
                                    likes={200}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
                <div className='trending'>
                    <Trending/>
                </div>
            </div>
        </StyledUser>
    )
}