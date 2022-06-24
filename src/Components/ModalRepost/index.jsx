import * as s from './styles.jsx'
import AuthContext from '../../contexts/AuthContext.jsx'
import { useContext, useState } from 'react'
import axios from 'axios'

export default function ModalRepost(item) {
	const [sharePost, setSharePost] = useState('Yes, share!')
	const [btnDesabled, setBtnDesabled] = useState(false) //ARRUMAR ESSE BTN DESA
	const {
		displayModal,
		setDisplayModal,
		idPostDelete,
		checknewpost,
		setChecknewpost,
		checkTrending,
		setCheckTrending,
		setDisplayRT,
		displayRT,
		infoUser,
		repostID,
	} = useContext(AuthContext)
	const { URL } = useContext(AuthContext)
	function repost() {
		axios({
			method: 'post',
			url: `${URL}/repost`,
			data: {
				postID: repostID,
				repostUserID: infoUser[0].id,
			},
		})
			.then((response) => {
				setDisplayRT('none')
				console.log(response)
				setChecknewpost(!checknewpost)
				setCheckTrending(!checkTrending)
			})
			.catch((error) => {
				console.log(error)
				setDisplayRT('none')
			})
	}
	return (
		<s.Modal display={displayRT}>
			<s.Opacity
				onClick={() => {
					setDisplayRT('none')
				}}
			/>
			<s.ModalContainer>
				<h1>Do you want to re-post this link?</h1>

				<div>
					<button
						className='no'
						onClick={() => {
							setDisplayRT('none')
						}}
						disabled={btnDesabled}
					>
						No, cancel
					</button>
					<button
						className='yes'
						onClick={() => {
							repost()
						}}
						disabled={btnDesabled}
					>
						Yes, share!
					</button>
				</div>
			</s.ModalContainer>
		</s.Modal>
	)
}
