import { useEffect, useState, useContext } from 'react'
import * as s from './styles.jsx'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext.jsx'

export default function TrendingComponent() {
	const { renderHash, setRenderHash, checkTrending } = useContext(AuthContext)
	const [hash, setHash] = useState()
	const navigate = useNavigate()
	useEffect(() => {
		axios({
			method: 'get',
			url: 'http://localhost:5000/ranking',
		})
			.then((response) => {
				console.log(response.data)
				setHash(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [checkTrending])
	return (
		<s.TrendingContainer>
			<header className="header">
				<p>trending</p>
			</header>
			<main>
				<div className="hashtags">
					{hash ? (
						hash.map((item, index) => {
							return (
								<p
									key={index}
									onClick={() => {
										setRenderHash(!renderHash)
										navigate(
											`/hashtag/${item.hashtag.replace(
												'#',
												''
											)}`
										)
									}}
								>
									{item.hashtag}
								</p>
							)
						})
					) : (
						<p>loading</p>
					)}
				</div>
			</main>
		</s.TrendingContainer>
	)
}
