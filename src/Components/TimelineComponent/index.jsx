import * as s from './styles.jsx'
import urlMetadata from 'url-metadata'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'



export default function TimelineComponent() {
    const {token} = useContext(AuthContext)
    const [posts,setPosts] = useState()
    const [url,setUrl] = useState()
    const [description,setDescription] = useState()
    const [btnEnable,setBtnEnable] = useState(false)

    // useEffect(()=>{
    //     urlMetadata('https://github.com/hiannmanso').then(response=>{
    //         console.log(response)

    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // },[])

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:5000/posts"
        }).then(response=>{
            setPosts(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    },[])
    function newPost(e){
        e.preventDefault()
        if(!url) {alert('fill in url with valid link') 
        return}
        setBtnEnable(!btnEnable)
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
            console.log(btnEnable)
            setBtnEnable(!btnEnable)
            console.log(response.data)
        }).catch(error=>{
            console.log(btnEnable)
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
                    <img className='imgProfile' src="https://m.media-amazon.com/images/I/71ftHg2dwML._AC_SL1500_.jpg" alt="" />
                        <div>
                            <p>What are you going to share today?</p>
                            <form onSubmit={newPost}>
                            <input className='url' value={url} onChange={e=>{setUrl(e.target.value)}}  type="text" placeholder="http:// ..." disabled={btnEnable} />
                            <input className='description' value={description} onChange={e=>{setDescription(e.target.value)}}  type="text" placeholder="Awesome article about #javascript" disabled={btnEnable}/>
                            <input className='submit' type='submit' value='Publish' disabled={false}/>
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
                            <img className='imgProfile' src="https://m.media-amazon.com/images/I/71ftHg2dwML._AC_SL1500_.jpg" alt="" />
                            <ion-icon name="heart-outline"></ion-icon>
                            <p>0 likes</p>
                        </div>
                        <div className='description'>
                            <p>{item.name}</p>
                            <h2>{item.description}</h2>
                            <div className='infosUrl'>
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
                    }):<h1>Loading</h1>}
                   
                </s.Timeline>
            </main>
        </s.TimelineContainer>
    )
}