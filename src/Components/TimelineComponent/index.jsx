import * as s from './styles.jsx'
import { useEffect, useState, useContext, useRef } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import ReactHashtag from 'react-hashtag'

import { useNavigate } from 'react-router-dom'
import api from '../../services/api.jsx'
import Likes from '../Likes'
import TrendingComponent from '../TrendingComponent/index.jsx'

import trasher from './../../assets/trasher.svg'
import ModalDelete from '../ModalDelete/index.jsx'
import PostHome from '../PostsHome/index.jsx'
import RepostComponent from '../RePostComponent/index.jsx'

export default function TimelineComponent() {
	const {
		token,
		setInfoUser,
		infoUser,
		id,
		setID,
		setDisplayModal,
		setCheckTrending,
		checkTrending,
		idPostDelete,
		setIdPostDelete,
		setChecknewpost,
		checknewpost,
		setDisplayRT,
	} = useContext(AuthContext)
	const [posts, setPosts] = useState('')
	const [url, setUrl] = useState('')
	const [usersLikes, setUsersLikes] = useState('')
	const inputRef = useRef(null)
	const [description, setDescription] = useState()
	const [btnEnable, setBtnEnable] = useState(false)
	const navigate = useNavigate()
	const idLocal = localStorage.getItem('id')
	const tokenLocal = localStorage.getItem('token')
	const [liked, setLiked] = useState(false)
	const [following, setFollowing] = useState([]);
	const [str, setStr] = useState('');


	useEffect(async () => {
		try {
			const { data } = await api.getFollowing(tokenLocal);
			if (data.length < 1) {
				setStr("You don't follow anyone yet. Search for new friends!");
			}
			setFollowing(data);
		} catch (err) {
			console.log("Error in get users i'm following");
		}
	}, []);

	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/posts',
			headers: {
				Authorization: `Bearer ${tokenLocal}`,
			}
		})
			.then((response) => {
				setPosts(response.data)
				if (response.data.length < 1) {
					setStr("No posts found from your friends");
				}
				console.log(response.data)
			})
			.catch((error) => {
				alert(
					'An error occured while trying to fetch the posts, please refresh the page'
				)
				console.log(error)
			})
	}, [checknewpost])

	useEffect(async () => {
		const { data } = await api.getFollowing(tokenLocal);
		setFollowing(data);
	}, [])

	useEffect(() => {
		try {
			const promise = api.getUsersLikes()
			setUsersLikes(promise.data)
		} catch (err) {
			console.log(err)
		}
	}, [])

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

	async function newPost(e) {
		console.log(infoUser)
		if (token) {
			axios({
				method: 'post',
				url: 'http://localhost:5000/posts',
				data: {
					url,
					description,
				},
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
				.then((response) => {
					setBtnEnable(false)
					console.log(response.data)
					setChecknewpost(!checknewpost)
					setDescription('')
					setUrl('')
					console.log(checkTrending)
					setCheckTrending(!checkTrending)
				})
				.catch((error) => {
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
				method: 'post',
				url: 'http://localhost:5000/posts',
				data: {
					url,
					description,
				},
				headers: {
					authorization: `Bearer ${tokenLocal}`,
				},
			})
				.then((response) => {
					setBtnEnable(false)
					console.log(response.data)
					setCheckTrending(!checkTrending)
					setChecknewpost(!checknewpost)
					setDescription('')
					setUrl('')
				})
				.catch((error) => {
					setBtnEnable(false)
					alert('error posting your link')

					console.log(error)
				})
		}
	}



	function modalScreen(item) {
		setDisplayModal('flex')
	}
	function modalRepost(item) {
		setDisplayRT('flex')
	}
	return following.length > 0 && posts.length > 0 ? (
		<s.TimelineContainer>
			<header>
				<h1>timeline</h1>
			</header>

			<div className='timeline'>
				<div className='left'>
					<section>
						<div className='postContainer'>
							{infoUser ? (
								<img
									className='imgProfile'
									src={infoUser[0].picture}
									alt=''
								/>
							) : (
								<img
									className='imgProfile'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU'
									alt=''
								/>
							)}
							<div>
								<p>What are you going to share today?</p>
								<form onSubmit={newPost}>
									<input
										className='url'
										value={url}
										onChange={(e) => {
											setUrl(e.target.value)
										}}
										type='text'
										placeholder='http:// ...'
										disabled={btnEnable}
									/>
									<input
										className='description'
										value={description}
										onChange={(e) => {
											setDescription(e.target.value)
										}}
										type='text'
										placeholder='Awesome article about #javascript'
										disabled={btnEnable}
									/>
									{btnEnable ? (
										<input
											className='submit'
											type='submit'
											value='Publishing...'
											disabled
										/>
									) : (
										<input
											className='submit'
											type='submit'
											value='Publish'
											disabled={btnEnable}
										/>
									)}
								</form>
							</div>
						</div>
					</section>
					<main>
						<s.Timeline>
							<div className='postWComments'>
								{posts ? (
									posts.map((item, index) => {
										if (item.repUserID !== null) {
											return (
												<RepostComponent
													userID={item.id}
													idLocal={infoUser[0].id}
													toEdit={() =>
														toEdit(item.id)
													}
													openUrl={() =>
														openUrl(item.url)
													}
													trasher={trasher}
													description={
														item.description
													}
													index={index}
													name={item.name}
													picture={item.picture}
													likes={item.quantityLikes}
													id={item.postID}
													url={item.url}
													urlTitle={item.urlTitle}
													urlDescription={
														item.urlDescription
													}
													urlImage={item.urlImage}
													quantityLikes={
														item.quantityLikes
													}
													quantityComments={
														item.quantityComments
													}
													repUserNAME={
														item.repUserNAME
													}
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
													toEdit={() =>
														toEdit(item.id)
													}
													openUrl={() =>
														openUrl(item.url)
													}
													trasher={trasher}
													description={
														item.description
													}
													index={index}
													name={item.name}
													picture={item.picture}
													likes={item.quantityLikes}
													id={item.postID}
													url={item.url}
													urlTitle={item.urlTitle}
													urlDescription={
														item.urlDescription
													}
													urlImage={item.urlImage}
													quantityLikes={
														item.quantityLikes
													}
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
									<h1>There are no posts yet</h1>
								)}
							</div>
						</s.Timeline>
					</main>
				</div>
				<TrendingComponent />
			</div>
		</s.TimelineContainer>
	) :
		(
			<s.TimelineContainer>
				<header>
					<h1>timeline</h1>
				</header>

				<div className='timeline'>
					<div className='left'>
						<section>
							<div className='postContainer'>
								{infoUser ? (
									<img
										className='imgProfile'
										src={infoUser[0].picture}
										alt=''
									/>
								) : (
									<img
										className='imgProfile'
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU'
										alt=''
									/>
								)}
								<div>
									<p>What are you going to share today?</p>
									<form onSubmit={newPost}>
										<input
											className='url'
											value={url}
											onChange={(e) => {
												setUrl(e.target.value)
											}}
											type='text'
											placeholder='http:// ...'
											disabled={btnEnable}
										/>
										<input
											className='description'
											value={description}
											onChange={(e) => {
												setDescription(e.target.value)
											}}
											type='text'
											placeholder='Awesome article about #javascript'
											disabled={btnEnable}
										/>
										{btnEnable ? (
											<input
												className='submit'
												type='submit'
												value='Publishing...'
												disabled
											/>
										) : (
											<input
												className='submit'
												type='submit'
												value='Publish'
												disabled={btnEnable}
											/>
										)}
									</form>
								</div>
							</div>
						</section>
						<h1>{str}</h1>
					</div>
				</div>
			</s.TimelineContainer>

		)
}
