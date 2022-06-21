import { StyledHeader } from './styles'
import { IoSearchOutline, IoChevronDownOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
export default function Header() {
	//`Search for people ${<IoSearchOutline/>}`
	const navigation = useNavigate()
	return (
		<StyledHeader>
			<div className="box-header">
				<p className="logo">linkr</p>

				<div className="box-input">
					<input type="search" placeholder={'Search for people'} />
					<IoSearchOutline className="search" />
				</div>

				<div className="info-user">
					<IoChevronDownOutline className="more" />
					<p>image user</p>
				</div>
			</div>
		</StyledHeader>
	)
}
