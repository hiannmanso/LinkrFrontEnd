import * as s from './styles'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from 'react-hashtag'
import { useNavigate, useParams } from 'react-router-dom'
import TrendingComponent from '../TrendingComponent/index.jsx'
import PostHome from '../PostsHome/index.jsx'
import trasher from './../../assets/trasher.svg'
import RepostComponent from '../RePostComponent/index.jsx'
import api from '../../services/api'

export default function HashtagComponent() {
	const { setInfoUser, infoUser, renderHash, setDisplayModal, setDisplayRT } =
		useContext(AuthContext)
	const [posts, setPosts] = useState('')
	const token = localStorage.getItem('token')
	const { hashtag } = useParams()
	const tokenLocal = localStorage.getItem('token')
	const [checknewpost, setChecknewpost] = useState(false)
	const navigate = useNavigate()
	const { URL } = useContext(AuthContext)
	function openUrl(url) {
		window.open(`${url}`, '_blank')
	}

	useEffect(() => {
		console.log(hashtag)
		axios({
			method: 'get',
			url: `${URL}/hashtag/${hashtag}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				setPosts(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [renderHash])
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
							<h1>#{hashtag}</h1>
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
