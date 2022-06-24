// import { StyledDiv } from './styles'
import { useEffect, useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Likes from '../Likes'
import ReactHashtag from 'react-hashtag'
import * as s from '../TimelineComponent/styles'
import Edit from '../Edit'
import * as i from './styles'
import trasher from '../../assets/trasher.svg'
import api from '../../services/api'
import AuthContext from '../../contexts/AuthContext.jsx'
import { IoChatbubbleEllipsesOutline, IoRepeatSharp } from 'react-icons/io5'
import CommentComponent from '../CommentComponent/index.jsx'
import CommentContainer from '../CommentContainer/index.jsx'
import axios from 'axios'
import { CgArrowRightO } from 'react-icons/cg'

export default function RepostComponent(props) {
	const {
		username,
		name,
		userID,
		idLocal,
		openUrl,
		toEdit,
		Input,
		description,
		index,
		picture,
		postContent,
		url,
		likes,
		urlDescription,
		urlTitle,
		urlImage,
		id,
		quantityLikes,
		modalScreen,
		editTextOfPost,
		quantityComments,
		reposts,
		repUserID,
		repUserNAME,
	} = props
	// const idLocal = localStorage.getItem('id');
	const inputRef = useRef(null)
	const { setIdPostDelete } = useContext(AuthContext)
	const [editing, setEditing] = useState(false)
	const [disabled, setDisabled] = useState(false)
	const [editedDescription, setEditedDescription] = useState(description)
	const editedTextRef = useRef(editedDescription)
	const navigate = useNavigate()
	const token = localStorage.getItem('token')
	const { commentDisplay, infoUser, displayRT, setDisplayRT } =
		useContext(AuthContext)
	const [showComment, setShowComment] = useState('none')
	const { URL } = useContext(AuthContext)
	const setTextRef = (data) => {
		editedTextRef.current = data
		setEditedDescription(data)
		console.log(data)
	}

	const handler = (e) => {
		if (e.key === 'Escape') {
			setEditing(false)
			setEditedDescription(description)
		}

		if (e.key === 'Enter') {
			sendUpdateDescription()
		}
	}

	function sendUpdateDescription() {
		setDisabled(true)

		if (editedTextRef.current === description) {
			setEditing(false)
			setDisabled(false)
		} else {
			send()
		}
	}

	async function send() {
		try {
			await api.editPost(
				id,
				{ description: editedTextRef.current },
				token
			)
			setDisabled(false)
			setEditing(false)
		} catch (err) {
			console.log('Falha ao editar a descrição do post!')
		}
	}

	// function madeInput() {
	//     setTimeout(() => {
	//         inputRef.current.focus();
	//     }, 2000)
	// }

	useEffect(() => {
		if (editing) {
			inputRef.current.focus()
			const actual = inputRef.current

			actual.addEventListener('keydown', handler)
			return () => actual.removeEventListener('keydown', handler)
		}
	}, [editing])

	function hiddenComment() {
		if (showComment === 'none') {
			setShowComment('inherit')
		} else {
			setShowComment('none')
		}
	}

	function repost() {
		axios({
			method: 'post',
			url: `${URL}/repost`,
			data: {
				postID: id,
				repostUserID: infoUser[0].id,
			},
		})
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<s.postContainer>
			<div className='repo'>
				<IoRepeatSharp />
				<h1>
					Re-posted by{' '}
					{repUserID === idLocal ? (
						<span>you</span>
					) : (
						<span>{repUserNAME} </span>
					)}
				</h1>
			</div>
			<s.Post key={index}>
				<div className='icons'>
					<img className='imgProfile' src={picture} alt='' />
					<Likes name={username} likes={quantityLikes} id={id} />
					<div
						className='comments'
						onClick={() => {
							hiddenComment()
						}}
					>
						<IoChatbubbleEllipsesOutline />
						<p>{quantityComments}</p>
					</div>
					<div
						className='comments'
						onClick={() => {
							setDisplayRT('flex')
							// repost()
						}}
					>
						<IoRepeatSharp />
						<p>{reposts}</p>
					</div>
				</div>
				<div className='description'>
					<div className='first-line'>
						<p
							className='username' //PEGAR ESSE STYLE DO USERNAME
							onClick={() => {
								navigate(`/user/${userID}`, {
									state: { name: name },
								})
							}}
						>
							{name}
						</p>
						{userID === idLocal ? <></> : <></>}
					</div>
					{!editing ? (
						<Edit description={editedDescription} />
					) : (
						<form onSubmit={() => toEdit(id)}>
							<i.Input
								defaultValue={editedDescription}
								ref={inputRef}
								onFocus={(e) =>
									e.currentTarget.setSelectionRange(
										e.currentTarget.value.length,
										e.currentTarget.value.length
									)
								}
								onChange={(e) => setTextRef(e.target.value)}
							/>
						</form>
					)}

					<div className='infosUrl' onClick={() => openUrl(url)}>
						<div>
							<p>{urlTitle}</p>
							<h1>{urlDescription}</h1>
							<h2>{url}</h2>
						</div>
						<img src={urlImage} alt='' />
					</div>
				</div>
			</s.Post>
			<s.showComment display={showComment}>
				<CommentContainer userID={userID} postID={id} />
			</s.showComment>
		</s.postContainer>
	)
}
