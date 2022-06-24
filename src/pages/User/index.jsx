import HeaderTimeline from './../../Components/HeaderTimeline/index.jsx'
import UserComponent from './../../Components/UserComponent/index.jsx'
import ModalDelete from '../../Components/ModalDelete/index.jsx'
import ModalRepost from '../../Components/ModalRepost/index.jsx'
export default function User() {
	return (
		<>
			<HeaderTimeline />
			<UserComponent />
			<ModalDelete />
			<ModalRepost />
		</>
	)
}
