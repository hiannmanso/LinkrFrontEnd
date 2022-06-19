import * as s from './styles.jsx'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from "react-hashtag";
import {  useNavigate } from 'react-router-dom'

export default function TimelineComponent() {

    const {token,setInfoUser,infoUser} = useContext(AuthContext)
    const [posts,setPosts] = useState('')
    const [url,setUrl] = useState('')
    const [description,setDescription] = useState()
    const [btnEnable,setBtnEnable] = useState(false)
    const [checknewpost,setChecknewpost] = useState(false)
    const navigate = useNavigate()
  


    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:5000/users",
            headers: {
				authorization: `Bearer ${token}`,
			},

        }).then(response=>{
            setInfoUser(response.data)
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:5000/posts"
        }).then(response=>{
            setPosts(response.data)
            console.log(response.data)
        }).catch(error=>{   
            alert('An error occured while trying to fetch the posts, please refresh the page')
            console.log(error)
        })
    },[checknewpost])
    function openUrl(url) {
        window.open(`${url}`, '_blank');
    }
    async function newPost(e){
        if(!token){
             token = localStorage.getItem('token');

        }
        e.preventDefault()
        if(!url) {alert('fill in url with valid link') 
        return}
        await setBtnEnable(true)
        axios({
            method:"post",
            url:"http://localhost:5000/posts",
            data:{
                url,
                description,
            },
            headers: {
				authorization: `Bearer ${token}`,
			},
        }).then(response=>{
            setBtnEnable(false)
            console.log(response.data)
            setChecknewpost(!checknewpost)
            setDescription('')
            setUrl('')
        }).catch(error=>{
            setBtnEnable(false)
            alert('error posting your link')

            console.log(error)
        })
    }
    return(
        <s.TimelineContainer>
            <header>
                <h1>timeline</h1>
            </header>
            <section>
                <div className='postContainer'>
                    {infoUser?<img className='imgProfile' src={infoUser[0].picture} alt="" />:<img className='imgProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU" alt="" />}
                  
                        <div>
                            <p>What are you going to share today?</p>
                            <form onSubmit={newPost}>
                            <input className='url' value={url} onChange={e=>{setUrl(e.target.value)}}  type="text" placeholder="http:// ..." disabled={btnEnable} />
                            <input className='description' value={description} onChange={e=>{setDescription(e.target.value)}}  type="text" placeholder="Awesome article about #javascript" disabled={btnEnable}/>
                            {btnEnable?<input className='submit' type='submit' value='Publishing...' disabled/>:<input className='submit' type='submit' value='Publish' disabled={btnEnable}/>}
                        
                            </form>

                        </div>
                </div>
            </section>
            <main>

                <s.Timeline>
                    {posts? posts.map((item,index)=>{
                        return(
                    <s.Post key={index}>
                        <div className='icons'>
                            <img className='imgProfile' src={item.picture} alt="" />
                            <ion-icon name="heart-outline"></ion-icon>
                            <p>0 likes</p>
                        </div>
                        <div className='description'>
                            <p>{item.name}</p>
                            {item.description? <h2>
                            <ReactHashtag onHashtagClick={(hashtagValue)=>{navigate(`/hashtag/${hashtagValue.replace('#','').toLowerCase()}`)}}>
                            
                                {item.description}
                                </ReactHashtag>
                                </h2>:<></>}
                           
                            <div className='infosUrl' onClick={()=>openUrl(item.url)}>
                                <div>
                                    <p>{item.urlTitle}</p>
                                    <h1>{item.urlDescription}</h1>
                                    <h2>{item.url}</h2>
                                </div>
                                <img src={item.urlImage} alt="" />
                            </div>

                        </div>
                    </s.Post>

                        )
                    }):<h1>There are no posts yet</h1>}
                   
                </s.Timeline>
            </main>
        </s.TimelineContainer>
    )
}