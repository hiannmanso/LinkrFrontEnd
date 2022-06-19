import * as s from "./styles"
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from "react-hashtag";
import { useNavigate, useParams } from 'react-router-dom'

export default function HashtagComponent() {
    const { token, setInfoUser, infoUser } = useContext(AuthContext)
    const [posts, setPosts] = useState('')
    const { hashtag } = useParams();



    const [checknewpost, setChecknewpost] = useState(false)
    const navigate = useNavigate()

    function openUrl(url) {
        window.open(`${url}`, '_blank');
    }

    useEffect(() => {
        console.log(hashtag)
        axios({
            method: "get",
            url: `http://localhost:5000/hashtag/${hashtag}`
        }).then(response => {
            setPosts(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <s.TimelineContainer>
            <header>
                <h1>#hashtag</h1>
            </header>

            <main>

                <s.Timeline>
                    {posts ? posts.map((item, index) => {
                        return (
                            <s.Post key={index}>
                                <div className='icons'>
                                    <img className='imgProfile' src={item.picture} alt="" />
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <p>0 likes</p>
                                </div>
                                <div className='description'>
                                    <p>{item.name}</p>
                                    {item.description ? <h2>
                                        <ReactHashtag onHashtagClick={(hashtagValue) => { navigate(`/hashtag/${hashtagValue.replace('#', '').toLowerCase()}`) }}>

                                            {item.description}
                                        </ReactHashtag>
                                    </h2> : <></>}

                                    <div className='infosUrl' onClick={() => openUrl(item.url)}>
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
                    }) : <h1>There are no posts yet</h1>}

                </s.Timeline>
            </main>
        </s.TimelineContainer>
    )
}