import styled from 'styled-components'

export const ContainerComments = styled.div`
	width: 611px;
	min-height: 39px;

	background: #1e1e1e;
	border-radius: 16px;
	svg {
		color: #f3f3f3;
		font-size: 15px;
		position: absolute;
		right: 10px;
		top: 15px;
	}
	.comment {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px 0 16px 25px;

		border-bottom: 1px solid #353535;
		transform: rotate(-0.1deg);
	}

	span {
		padding-left: 4px;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;

		color: #565656;
	}

	.newComment {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px 0 16px 25px;
		.inputContainer {
			position: relative;
			width: 510px;
			height: 39px;
			input {
				width: 100%;
				height: 100%;
				background: #252525;
				border-radius: 8px;
				border: none;
				font-family: 'Lato';
				font-style: italic;
				font-weight: 400;
				font-size: 14px;
				line-height: 17px;
				/* identical to box height */

				letter-spacing: 0.05em;

				color: #575757;
			}
			input::placeholder {
				padding: 11px 0 11px 15px;
			}
		}
	}
	img {
		width: 39px;
		height: 39px;
		padding-right: 14px;
		background: url(image.png);
		border-radius: 26.5px;
	}
	h1 {
		height: 17px;

		font-family: 'Lato';
		font-style: normal;
		font-weight: 700;
		padding-bottom: 3px;
		font-size: 14px;
		line-height: 17px;
		/* identical to box height */

		color: #f3f3f3;
	}
	h2 {
		height: 17px;

		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		/* identical to box height */

		color: #acacac;
	}
`
export const Comments = styled.div``
