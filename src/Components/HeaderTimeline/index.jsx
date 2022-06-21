import logo from '../../assets/linkr.svg'
import arrow from '../../assets/arrow.svg'
import * as s from './styles.jsx'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

export default function HeaderTimeline() {
	const { token, setInfoUser, infoUser } = useContext(AuthContext)
	const navigation = useNavigate()
	const idLocal = localStorage.getItem('id')
	const [inputValue, setInputValue] = useState('')
	const [infoSearch, setInfoSearch] = useState()
	useEffect(() => {
		axios({
			method: 'get',
			url: `http://localhost:5000/user/${idLocal}`,
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				setInfoUser(response.data)
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	useEffect(() => {
		axios({
			method: 'get',
			url: `http://localhost:5000/users/${inputValue}`,
		})
			.then((response) => {
				console.log(response.data)
				setInfoSearch(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [inputValue])
	return (
		<s.HeaderContainer>
			<img
				className="logo"
				src={logo}
				alt="linkrLogo"
				onClick={() => {
					navigation('/timeline')
				}}
			/>
			{infoSearch ? (
				<div className="search">
					<DebounceInput
						minLength={3}
						debounceTimeout={300}
						value={inputValue}
						onChange={(event) => {
							setInputValue(event.target.value)
							console.log(inputValue)
						}}
						placeholder="Search for people"
					/>
					<div className="searchContainer">
						{infoSearch.map((item, index) => {
							return (
								<div
									key={index}
									className="infoSearch"
									onClick={() => {
										navigation(`/user/${item.id}`)
									}}
								>
									<img src={item.picture} alt="profile" />
									<p>{item.name}</p>
								</div>
							)
						})}
					</div>
				</div>
			) : (
				<DebounceInput
					minLength={3}
					debounceTimeout={300}
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value)
						console.log(inputValue)
					}}
					placeholder="Search for people"
				/>
			)}
			<div className="account">
				<img src={arrow} alt="" />
				{infoUser ? (
					<img
						className="imgProfile"
						src={infoUser[0].picture}
						alt=""
					/>
				) : (
					<img
						className="imgProfile"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU"
						alt=""
					/>
				)}
			</div>
		</s.HeaderContainer>
	)
}
