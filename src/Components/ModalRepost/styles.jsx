import styled from 'styled-components'

export const Modal = styled.div`
	display: ${(props) => props.display};
`
export const ModalContainer = styled.div`
	display: flex;
	position: fixed;
	z-index: 150;
	top: 15%;
	left: 30%;
	flex-direction: column;
	width: 597px;
	height: 262px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background: #333333;
	border-radius: 50px;
	h1 {
		width: 338px;
		height: 82px;

		padding: 38px 0 39px 129px;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 700;
		font-size: 34px;
		line-height: 41px;
		text-align: center;

		color: #ffffff;
	}
	div {
		margin-top: 39px;
		display: flex;
		flex-direction: row;
		justify-content: center;

		button:hover {
			cursor: pointer;
			opacity: 1;
		}
		.no {
			opacity: 0.8;
			width: 134px;
			height: 37px;
			margin-right: 27px;

			background: #ffffff;
			border-radius: 5px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			/* identical to box height */
			border: none;

			color: #1877f2;
		}
		.yes {
			opacity: 0.8;
			width: 134px;
			height: 37px;
			border: none;

			background: #1877f2;
			border-radius: 5px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			/* identical to box height */

			color: #ffffff;
		}
	}
`

export const Opacity = styled.div`
	position: fixed;
	z-index: 14;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: white;
	opacity: 0.5;
`
