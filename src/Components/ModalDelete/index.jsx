import * as s from './styles.jsx'
import AuthContext from '../../contexts/AuthContext.jsx'
import { useContext, useState } from 'react'
import axios from 'axios'

export default function ModalDelete(item) {
	const [msgDelete, setMsgDelete] = useState('Yes, delete it')
	const [btnDesabled, setBtnDesabled] = useState(false) //ARRUMAR ESSE BTN DESA
	const {
		displayModal,
		setDisplayModal,
		idPostDelete,
		checknewpost,
		setChecknewpost,
		checkTrending,
		setCheckTrending,
	} = useContext(AuthContext)
	const { URL } = useContext(AuthContext)
	function deletePost(item) {
		setBtnDesabled(true)
		setMsgDelete('loading..')
		console.log(idPostDelete)
		axios({
			method: 'delete',
			url: `${URL}/posts/${idPostDelete}`,
		})
			.then((response) => {
				console.log(response)
				setDisplayModal('none')
				setBtnDesabled(false)
				setChecknewpost(!checknewpost)
				setCheckTrending(!checkTrending)
				setMsgDelete('Yes, delete it')
			})
			.catch((error) => {
				console.log(error)
				setBtnDesabled(false)
				setDisplayModal('none')
				alert('could not delete post')
			})
	}
	return (
		<s.Modal display={displayModal}>
			<s.Opacity
				onClick={() => {
					setDisplayModal('none')
				}}
			/>
			<s.ModalContainer>
				<h1>Are you sure you want to delete this post?</h1>

				<div>
					<button
						className='no'
						onClick={() => {
							setDisplayModal('none')
						}}
						disabled={btnDesabled}
					>
						No, go back
					</button>
					<button
						className='yes'
						onClick={() => {
							deletePost(item)
						}}
						disabled={btnDesabled}
					>
						{msgDelete}
					</button>
				</div>
			</s.ModalContainer>
		</s.Modal>
	)
}
