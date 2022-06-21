import * as s from './styles.jsx'
import { useEffect, useState, useContext, useRef } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from "react-hashtag";

import { useNavigate } from 'react-router-dom'
import api from '../../services/api.jsx'
import Likes from '../Likes'
import TrendingComponent from '../TrendingComponent/index.jsx';
// import Modal from 'react-modal';

import trasher from './../../assets/trasher.svg'
import PostHome from '../PostsHome.jsx/index.jsx';
// import ModalDelete from '../ModalDelete/index.jsx';
import ModalDelete from '../ModalDelete/index.jsx'
export default function TimelineComponent() {


    const { token, setInfoUser, infoUser, id, setID } = useContext(AuthContext)
    const [posts, setPosts] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState()
    const [btnEnable, setBtnEnable] = useState(false)
    const [checknewpost, setChecknewpost] = useState(false)
    const [displayModal, setDisplayModal] = useState("none");
    const navigate = useNavigate()
    const idLocal = localStorage.getItem("id");
    const tokenLocal = localStorage.getItem("token");
    const [liked, setLiked] = useState(false);
    const inputRef = useRef(null);
    const [usersLikes, setUsersLikes] = useState('');
    console.log(tokenLocal, idLocal)


    useEffect(() => {
        try {
            const promise = api.getUsersLikes();
            setUsersLikes(promise.data);
        } catch (err) {
            console.log(err);
        }
    }, [])


    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:5000/user/${idLocal}`,
            headers: {
                authorization: `Bearer ${token}`,
            },

        }).then(response => {
            setInfoUser(response.data)
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }, []);
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:5000/posts"
        }).then(response => {
            setPosts(response.data)
            console.log(response.data)
        }).catch(error => {
            alert('An error occured while trying to fetch the posts, please refresh the page')
            console.log(error)
        })
    }, [checknewpost])

    function openUrl(url) {
        window.open(`${url}`, '_blank');
    }

    const editTextOfPost = () => {
        inputRef.current.focus();
    }

    async function newPost(e) {
        if (token) {
            axios({
                method: "post",
                url: "http://localhost:5000/posts",
                data: {
                    url,
                    description,
                },
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }).then(response => {
                setBtnEnable(false)
                console.log(response.data)
                setChecknewpost(!checknewpost)
                setDescription('')
                setUrl('')
            }).catch(error => {
                setBtnEnable(false)
                alert('error posting your link')

                console.log(error)
            })

        } else {
            e.preventDefault()
            if (!url) {
                alert('fill in url with valid link')
                return
            }
            await setBtnEnable(true)
            axios({
                method: "post",
                url: "http://localhost:5000/posts",
                data: {
                    url,
                    description,
                },
                headers: {
                    authorization: `Bearer ${tokenLocal}`,
                },
            }).then(response => {
                setBtnEnable(false)
                console.log(response.data)
                setChecknewpost(!checknewpost)
                setDescription('')
                setUrl('')
            }).catch(error => {
                setBtnEnable(false)
                alert('error posting your link')

                console.log(error)
            })
        }
    }
    console.log(infoUser)

    async function like(postID) {
        console.log(postID);
        try {
            token ? await api.setLike({ postID }, token) : await api.setLike({ postID }, tokenLocal);
            setLiked(true);
        } catch (err) {
            setLiked(false);
            console.log("Error in like", err);
        }
    }

    async function toEdit(id, description) {
        try {
            await api.editPost(id, { description }, tokenLocal);
        } catch (err) {
            console.log("Deu erro na edição", err);
        }
    }

    function modalScreen(item) {
        setDisplayModal('flex')
        // deletePost(item)

    }
    function deletePost(item) {
        console.log(item.postID)
        axios({
            method: "delete",
            url: `http://localhost:5000/posts/${item.postID}`
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    return (

        <s.TimelineContainer>
            <header>
                <h1>timeline</h1>
            </header>

            <div className='timeline'>
                <div className='left'>
                    <section>
                        <div className='postContainer'>
                            {infoUser ? <img className='imgProfile' src={infoUser[0].picture} alt="" /> : <img className='imgProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU" alt="" />}
                            <div>
                                <p>What are you going to share today?</p>
                                <form onSubmit={newPost}>
                                    <input className='url' value={url} onChange={e => { setUrl(e.target.value) }} type="text" placeholder="http:// ..." disabled={btnEnable} />
                                    <input className='description' value={description} onChange={e => { setDescription(e.target.value) }} type="text" placeholder="Awesome article about #javascript" disabled={btnEnable} />
                                    {btnEnable ? <input className='submit' type='submit' value='Publishing...' disabled /> : <input className='submit' type='submit' value='Publish' disabled={btnEnable} />}

                                </form>

                            </div>
                        </div>
                    </section>
                    <main>

                        <s.Timeline>
                            {posts ? posts.map((item, index) => {
                                return (
                                    <PostHome userID={item.id} idLocal={infoUser[0].id} toEdit={() => toEdit(item.id)} openUrl={() => openUrl(item.url)} trasher={trasher} description={item.description} index={index} name={item.name} picture={item.picture} like={() => like(item.postID)} likes={item.quantityLikes} id={item.postID} url={item.url} urlTitle={item.urlTitle} urlDescription={item.urlDescription} urlImage={item.urlImage} quantityLikes={item.quantityLikes} modalScreen={() => modalScreen(item.id)} editTextOfPost={() => (editTextOfPost())} />
                                )
                            }) : <h1>There are no posts yet</h1>}

                        </s.Timeline>
                    </main>

                </div>
                <TrendingComponent />
            </div>

        </s.TimelineContainer>
    )
}