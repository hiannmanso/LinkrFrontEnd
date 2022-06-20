import { StyledUser } from './styles'
import Post from '../../../Components/Post'
import Trending from '../../../Components/Trending'
import { useState, useEffect, useContext } from 'react'
import api from '../../../services/api'
import AuthContext from '../../../contexts/AuthContext'

export default function Main() {
	// const { token, setInfoUser, infoUser, id } = useContext(AuthContext);
	// console.log(id, infoUser, token)
	const [userInfo, setUserinfo] = useState([{ name: '', picture: '' }])
	const [posts, setPosts] = useState(null)
	const id = localStorage.getItem('id')
	async function loadUser() {
		//Alterar para carregar id dinamicamente
		//Infomarçoes do usario
		const user = await api.getUserId(id)
		setUserinfo(user)
		const post = await api.getPostId(id)
		setPosts(post)
	}

	useEffect(() => {
		loadUser()
	}, [])

	return (
		<StyledUser>
			<div className="box-user">
				<div className="user">
					<img src={userInfo[0].picture} className="user-image" />
					<p className="user-name">{userInfo[0].name}'s posts</p>
				</div>
			</div>
			<div className="container">
				{posts !== null ? (
					<div className="box-post">
						{posts.map((post, index) => {
							return (
								<Post
									name={userInfo[0].name}
									image={userInfo[0].picture}
									postContent={post.description}
									url={post.url}
									likes={200}
									urlDescription={post.urlDescription}
									urlTitle={post.urlTitle}
									urlImage={post.urlImage}
									key={index}
								/>
							)
						})}
					</div>
				) : (
					<p className="not-post">User hasn't posted anything yet</p>
				)}

				<div className="trending">
					<Trending />
				</div>
			</div>
		</StyledUser>
	)
}
