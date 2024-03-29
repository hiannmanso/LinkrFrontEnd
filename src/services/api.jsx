import axios from 'axios'

// const URL = 'localhost:5000/'
const URL ="https://api-linkr-dney.onrender.com/"

async function postLogin(body) {
	return await axios.post(`${URL}signin`, body)
}

async function postSignUp(objeto) {
	console.log(objeto)
	try {
		const resposta = await axios.post(`${URL}signup`, objeto)
		const { data } = resposta
		console.log('registered!')
		return data
	} catch (err) {

		console.log(err)
		return null
	}
}

async function getUsersLikes() {
	return await axios.get(`${URL}likes`)
}

async function getPostById(id) {
	return await axios.get(`${URL}post/${id}`)
}

async function setLike(body, token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	return await axios.post(`${URL}like`, body, config)
}

async function getPostId(id) {
	try {
		const resposta = await axios.get(`${URL}posts/${id}`)
		const { data } = resposta
		return data
	} catch (err) {
		console.log(err.resposta)
		return null
	}
}
async function getUserId(id) {
	try {
		const resposta = await axios.get(`${URL}user/${id}`)
		const { data } = resposta
		return data
	} catch (err) {
		console.log(err.resposta)
		return null
	}
}

async function editPost(id, body, token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	return await axios.put(`${URL}posts/${id}`, body, config)
}

async function getUsersLikedOnPost(id) {
	return await axios.get(`${URL}likes/${id}`)
}

async function setFollowing(body, token) {
	console.log(body)
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	return await axios.post(`${URL}follow`, body, config)
}

async function getFollowing(token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	return await axios.get(`${URL}follow`, config)
}

async function getPosts(token) { 
	console.log(token)
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	return await axios.get(`${URL}posts`, config)
}

const api = {
	postLogin,
	postSignUp,
	getPostId,
	getUserId,
	setLike,
	editPost,
	getPostById,
	getUsersLikes,
	getUsersLikedOnPost,
	setFollowing,
	getFollowing,
	getPosts,
}

export default api
