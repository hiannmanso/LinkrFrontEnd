import ReactHashtag from 'react-hashtag'
import { useNavigate } from 'react-router-dom'

export default function Edit(props) {
	const { description } = props
	const navigate = useNavigate()
	return description ? (
		<h2>
			<ReactHashtag
				onHashtagClick={(hashtagValue) => {
					navigate(
						`/hashtag/${hashtagValue
							.replace('#', '')
							.toLowerCase()}`
					)
				}}
			>
				{description}
			</ReactHashtag>
		</h2>
	) : (
		<></>
	)
}
