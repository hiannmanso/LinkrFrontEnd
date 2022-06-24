import * as s from './styles'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from 'react-hashtag'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import TrendingComponent from '../TrendingComponent/index.jsx'
import api from '../../services/api'
import Likes from '../Likes'
import Follow from '../Follow'
import PostHome from '../PostsHome/index.jsx'
import trasher from './../../assets/trasher.svg'
import RepostComponent from '../RePostComponent/index.jsx'

export default function UserComponent() {
	const { setInfoUser, infoUser, renderHash, setDisplayModal, setDisplayRT } =
		useContext(AuthContext)
	const token = localStorage.getItem('token')
	const idLocal = localStorage.getItem('id')
	const [posts, setPosts] = useState('')
	const { userID } = useParams()
	const { state } = useLocation()
	const { name } = state
	console.log(userID)
	const [following, setFollowing] = useState(null)
	const [loading, setLoading] = useState(true)
	const { URL } = useContext(AuthContext)
	const [checknewpost, setChecknewpost] = useState(false)
	const navigate = useNavigate()
	const tokenLocal = localStorage.getItem('token')
	useEffect(() => {
		axios({
			method: 'get',
			url: `${URL}/posts/${userID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				setPosts(response.data)
				setLoading(false)
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	function modalScreen(item) {
		setDisplayModal('flex')
	}
	function modalRepost(item) {
		setDisplayRT('flex')
	}
	function openUrl(url) {
		window.open(`${url}`, '_blank')
	}
	async function toEdit(id, description) {
		try {
			await api.editPost(id, { description }, tokenLocal)
		} catch (err) {
			console.log('Deu erro na edição', err)
		}
	}

	return (
		<s.TimelineContainer>
			<main>
				<s.Timeline>
					<div className='left'>
						<header>
							{userID != idLocal ? (
								<Follow userID={userID} />
							) : (
								<></>
							)}
							{<h1>{`${name}'s posts`}</h1>}
						</header>
						{posts ? (
							posts.map((item, index) => {
								if (item.repUserID !== null) {
									return (
										<RepostComponent
											userID={item.id}
											idLocal={infoUser[0].id}
											toEdit={() => toEdit(item.id)}
											openUrl={() => openUrl(item.url)}
											trasher={trasher}
											description={item.description}
											index={index}
											name={item.name}
											picture={item.picture}
											likes={item.quantityLikes}
											id={item.postID}
											url={item.url}
											urlTitle={item.urlTitle}
											urlDescription={item.urlDescription}
											urlImage={item.urlImage}
											quantityLikes={item.quantityLikes}
											quantityComments={
												item.quantityComments
											}
											repUserNAME={item.repUserNAME}
											repUserID={item.repUserID}
											reposts={item.reposts}
											modalScreen={() =>
												modalScreen(item.id)
											}
											username={infoUser[0].name}
										/>
									)
								} else {
									return (
										<PostHome
											userID={item.id}
											idLocal={infoUser[0].id}
											toEdit={() => toEdit(item.id)}
											openUrl={() => openUrl(item.url)}
											trasher={trasher}
											description={item.description}
											index={index}
											name={item.name}
											picture={item.picture}
											likes={item.quantityLikes}
											id={item.postID}
											url={item.url}
											urlTitle={item.urlTitle}
											urlDescription={item.urlDescription}
											urlImage={item.urlImage}
											quantityLikes={item.quantityLikes}
											quantityComments={
												item.quantityComments
											}
											reposts={item.reposts}
											modalScreen={() =>
												modalScreen(item.id)
											}
											modalRepost={() => {
												modalRepost(item.postID)
											}}
											username={infoUser[0].name}
										/>
									)
								}
							})
						) : (
							<header>
								<h1>There are no posts yet</h1>
							</header>
						)}
					</div>
					<TrendingComponent />
				</s.Timeline>
			</main>
		</s.TimelineContainer>
	)
}
