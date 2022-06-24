import { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../services/api'
import ReactTooltip from 'react-tooltip'

export default function Likes(props) {
	const { likes, id, name } = props
	const [active, setActive] = useState(false)
	const [totalLikes, setTotalLikes] = useState(likes)
	const [liked, setLiked] = useState(false)
	const token = localStorage.getItem('token')
	// const [usersLikes, setUsersLikes] = useState('');
	const [peoplesWhoLiked, setPeoplesWhoLiked] = useState([])

	useEffect(() => {
		filterUsers()
	}, [peoplesWhoLiked])

	async function filterUsers() {
		let likeIt = false
		try {
			const { data } = await api.getUsersLikedOnPost(id)
			for (let i = 0; i < data.length; i++) {
				if (data[i].name === name) {
					setLiked(true)
					likeIt = true
				}
			}
			setPeoplesWhoLiked(verifyUsersLiked(data, likeIt))
		} catch (err) {
			console.log(err)
		}
	}

	function verifyUsersLiked(usersLikes, liked) {
		if (liked && usersLikes.length < 2) {
			return 'You liked this'
		} else if (!liked && usersLikes.length < 1) {
			return `No likes`
		} else if (liked && usersLikes.length === 2) {
			return `You and ${usersLikes[0].name}`
		} else if (liked && usersLikes.length >= 3) {
			return `You, ${usersLikes[0].name} and others ${
				usersLikes.length - 2
			} peoples`
		} else if (!liked && usersLikes.length === 1) {
			return `${usersLikes[0].name} liked this`
		} else if (!liked && usersLikes.length === 2) {
			return `${usersLikes[0].name} and ${usersLikes[1].name} liked this`
		} else if (!liked && usersLikes.length === 3) {
			return `${usersLikes[0].name}, ${usersLikes[1].name} and other ${
				usersLikes.length - 2
			}`
		} else if (!liked && usersLikes.length > 3) {
			return `${usersLikes[0].name}, ${usersLikes[1].name} and others ${
				usersLikes.length - 2
			}`
		}
	}

	async function like(postID) {
		try {
			await api.setLike({ postID }, token)
			const promise = await api.getPostById(postID)
			setTotalLikes(promise.data.quantityLikes)
			filterUsers()
			ReactTooltip.rebuild()
		} catch (err) {
			setLiked(!liked)
			console.log('Error in like', err)
		}
	}

	return liked ? (
		<Ilike>
			<ion-icon
				onClick={() => {
					like(id)
					setLiked(false)
				}}
				name='heart'
			></ion-icon>
			<p data-tip='' data-for={String(id)}>
				{totalLikes} likes
			</p>
			<ReactTooltip
				type='light'
				place='bottom'
				id={String(id)}
				getContent={() => {
					return null
				}}
			>
				<h1>{peoplesWhoLiked}</h1>
			</ReactTooltip>
		</Ilike>
	) : (
		<Dislike>
			<ion-icon
				onClick={() => {
					like(id)
					setLiked(true)
				}}
				name='heart-outline'
			></ion-icon>
			<p data-tip='' data-for={String(id)}>
				{totalLikes} likes
			</p>
			<ReactTooltip
				type='light'
				place='bottom'
				id={String(id)}
				getContent={() => {
					return null
				}}
			>
				<h1>{peoplesWhoLiked}</h1>
			</ReactTooltip>
		</Dislike>
	)
}

const Ilike = styled.div`
	ion-icon[name='heart'] {
		color: red;
	}
`

const Dislike = styled.div`
	ion-icon[name='heart-outline'] {
		color: #fff;
	}
`
