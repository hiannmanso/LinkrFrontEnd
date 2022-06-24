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

export default function HashtagComponent() {
	const { setInfoUser, infoUser, renderHash, search, setSearch } = useContext(AuthContext)
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

	useEffect(() => {
		axios({
			method: 'get',
			url: `${URL}/posts/${userID}`,
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

	function openUrl(url) {
		window.open(`${url}`, '_blank')
	}

	return (
		<s.TimelineContainer onClick={() => { setSearch(false) }}>
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
								return (
									<s.Post key={index}>
										<div className='icons'>
											<img
												className='imgProfile'
												src={item.picture}
												alt=''
											/>
											<Likes
												name={infoUser[0].name}
												likes={item.quantityLikes}
												id={item.postID}
											/>
										</div>
										<div className='description'>
											<p>{item.name}</p>
											{item.description ? (
												<h2>
													<ReactHashtag
														onHashtagClick={(
															hashtagValue
														) => {
															navigate(
																`/hashtag/${hashtagValue
																	.replace(
																		'#',
																		''
																	)
																	.toLowerCase()}`
															)
														}}
													>
														{item.description}
													</ReactHashtag>
												</h2>
											) : (
												<></>
											)}

											<div
												className='infosUrl'
												onClick={() =>
													openUrl(item.url)
												}
											>
												<div>
													<p>{item.urlTitle}</p>
													<h1>
														{item.urlDescription}
													</h1>
													<h2>{item.url}</h2>
												</div>
												<img
													src={item.urlImage}
													alt=''
												/>
											</div>
										</div>
									</s.Post>
								)
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
