import styled from 'styled-components'

export const LoaderDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-top: 40px;
	margin-bottom: 40px;
	h1 {
		margin-top: 16px;
		color: #6d6d6d;
		font-size: 16px;
	}
	@media (min-width: 376px) {
		h1 {
			font-size: 22px;
		}
	}
`
