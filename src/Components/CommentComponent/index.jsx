import { useContext, useEffect } from 'react'
import { IoMdChatboxes } from 'react-icons/io'
import AuthContext from '../../contexts/AuthContext.jsx'

export default function CommentComponent({ quantityComments, userID, postID }) {
	return (
		<div className='comments' onClick={() => {}}>
			<IoMdChatboxes />
			<p>{quantityComments}</p>
		</div>
	)
}
