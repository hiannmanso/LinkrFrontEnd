import * as s from './styles.jsx'
import { CgArrowRightO } from 'react-icons/cg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext.jsx'

export default function CommentContainer({ userID, postID }) {
	const { infoUser, commentDisplay, checknewpost, setChecknewpost } =
		useContext(AuthContext)
	const [commentInput, setCommentInput] = useState()
	const [comments, setComments] = useState()
	const [bolleanComment, setBolleanComment] = useState(false)
	useEffect(() => {
		axios({
			method: 'get',
			url: `http://localhost:5000/comments/${postID}`,
		})
			.then((response) => {
				console.log(response.data)
				setComments(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [bolleanComment])

	function showComments() {
		console.log('info:', infoUser)
		axios({
			method: 'get',
			url: `http://localhost:5000/comments/${postID}`,
		})
			.then((response) => {
				console.log(response.data)
				setComments(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function newComment() {
		if (commentInput) {
			console.log(userID, postID)
			axios({
				method: 'post',
				url: 'http://localhost:5000/comments',
				data: {
					userID: infoUser[0].id,
					postID,
					text: commentInput,
				},
			})
				.then((response) => {
					console.log(response)
					setBolleanComment(!bolleanComment)
					setChecknewpost(!checknewpost)
					setCommentInput('')
				})
				.catch((error) => {
					console.log(error)
					setCommentInput('')
				})
		} else {
			alert('Please write one comment')
		}
	}
	return (
		<s.Comments display={commentDisplay}>
			<s.ContainerComments>
				{comments ? (
					comments.map((item, index) => {
						return (
							<div key={index} className='comment'>
								<img src={item.picture} alt='' />
								{console.log('item: ', item)}
								{item.userID === userID ? (
									<div className='commentInfos'>
										<h1>
											{item.name}{' '}
											<span>• post’s author</span>
										</h1>
										<h2>{item.text}</h2>
									</div>
								) : (
									<div className='commentInfos'>
										<h1>{item.name}</h1>
										<h2>{item.text}</h2>
									</div>
								)}
							</div>
						)
					})
				) : (
					<h1>loading</h1>
				)}
				<div className='newComment'>
					<img src={infoUser[0].picture} alt='' />
					<div className='inputContainer'>
						<input
							type='text'
							value={commentInput}
							onChange={(e) => {
								setCommentInput(e.target.value)
							}}
							placeholder='write a comment...'
						/>
						<CgArrowRightO onClick={newComment} />
					</div>
				</div>
			</s.ContainerComments>
		</s.Comments>
	)
}
