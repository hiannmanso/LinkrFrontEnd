import { Oval } from 'react-loader-spinner'
import * as s from './styles.jsx'

export default function Loader() {
	return (
		<s.LoaderDiv>
			<Oval
				ariaLabel='loading-indicator'
				height={36}
				width={36}
				strokeWidthSecondary={1}
				color='#6D6D6D'
				secondaryColor='#333333'
			/>
			<h1>Loading more posts...</h1>
		</s.LoaderDiv>
	)
}
