import * as s from './styles'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from 'react-hashtag'
import { useNavigate, useParams } from 'react-router-dom'
import TrendingComponent from '../TrendingComponent/index.jsx'

export default function HashtagComponent() {
	const { token, setInfoUser, infoUser, renderHash } = useContext(AuthContext)
	const [posts, setPosts] = useState('')
	const { userID } = useParams()

	const [checknewpost, setChecknewpost] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		axios({
			method: 'get',
			url: `http://localhost:5000/posts/${userID}`,
		})
			.then((response) => {
				setPosts(response.data)
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
		<s.TimelineContainer>
			<main>
				<s.Timeline>
					<div className="left">
						<header>
							{posts ? (
								<h1>{`${posts[0].name}'s posts`}</h1>
							) : (
								<h1>loading</h1>
							)}
						</header>
						{posts ? (
							posts.map((item, index) => {
								return (
									<s.Post key={index}>
										<div className="icons">
											<img
												className="imgProfile"
												src={item.picture}
												alt=""
											/>
											<ion-icon name="heart-outline"></ion-icon>
											<p>0 likes</p>
										</div>
										<div className="description">
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
												className="infosUrl"
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
													alt=""
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
