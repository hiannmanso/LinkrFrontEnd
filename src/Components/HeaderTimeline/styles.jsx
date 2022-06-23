import styled from 'styled-components'

export const HeaderContainer = styled.div`
	box-sizing: border-box;
	width: 100vw;
	height: 72px;
	background: #151515;
	position: fixed;
	top: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	input::placeholder {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 19px;
		line-height: 23px;
		/* identical to box height */
		padding: 9px 0 13px 14px;

		color: #c6c6c6;
	}
	ion-icon {
		font-size: 40px;
		color: #fff;
	}
	input {
		width: 563px;
		height: 45px;
		left: 460px;
		top: 14px;

		background: #ffffff;
		border-radius: 8px;
	}
	.logo:hover {
		cursor: pointer;
	}
	.logo {
		padding: 10px 0 8px 28px;
	}
	.account {
		padding: 10px 17px 9px;
		display: flex;
		flex-direction: row;
		.imgProfile {
			padding-left: 16.31px;
			width: 53px;
			height: 53px;
			border-radius: 26.5px;
		}
	}
	.infoSearch:hover {
		cursor: pointer;
	}
	.search {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 30%;
		width: 570px;

		display: flex;
		flex-direction: column;
		border-radius: 8px;
		background-color: #e7e7e7;
		.infoSearch {
			display: flex;
			align-items: center;
			flex-direction: row;
			width: 100%;
			p {
				font-family: 'Lato';
				font-style: normal;
				font-weight: 400;
				font-size: 19px;
				line-height: 23px;
				/* identical to box height */

				color: #515151;
			}
			img {
				padding: 0 12px 8px 0;
				padding-right: 12px;
				width: 39px;
				height: 39px;

				border-radius: 304px;
			}
		}
		.searchContainer {
			padding: 14px 0 23px 17px;
		}
	}
`
export const LogoutButton = styled.div`
	/* margin-top: 70px; */
	z-index: 100;
	position: fixed;
	top: 70px;
	z-index: 10;
	right: 0;
	div {
		width: 150px;
		height: 47px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #171717;
		border-radius: 0px 0px 20px 20px;

		h1 {
			font-family: 'Lato', sans-serif;
			color: #fff;
			font-size: 17px;
		}
	}
`
