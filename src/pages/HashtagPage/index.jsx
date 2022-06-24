import TimelineComponent from '../../Components/TimelineComponent/index.jsx'
import HeaderTimeline from '../../Components/HeaderTimeline/index.jsx'
import HashtagComponent from '../../Components/HashtagComponent/index.jsx'
import ModalDelete from '../../Components/ModalDelete/index.jsx'
import ModalRepost from '../../Components/ModalRepost/index.jsx'

export default function HashtagPage() {
	return (
		<>
			<HeaderTimeline />
			<HashtagComponent />
			<ModalDelete />
			<ModalRepost />
		</>
	)
}
