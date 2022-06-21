import styled from 'styled-components'

export const TimelineContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin-top: 100px;

	.timeline {
		display: flex;
		flex-direction: row;
		.left {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			margin-right: 25px;
		}
	}
	.username:hover {
		cursor: pointer;
	}
	header {
		width: 100%;
		display: flex;
		padding: 0 0 43px;
		height: 64px;

		font-family: 'Oswald';
		font-style: normal;
		font-weight: 700;
		font-size: 43px;
		line-height: 64px;

		color: #ffffff;
	}
	.postContainer {
		margin-bottom: 29px;
		position: relative;
		width: 611px;
		height: 219px;

		display: flex;
		flex-direction: row;
		background: #ffffff;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
		input::placeholder {
			padding-left: 13px;
		}
		p {
			width: 445px;
			height: 40px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 300;
			font-size: 20px;
			line-height: 24px;

			color: #707070;
		}
		.url {
			width: 503px;
			height: 30px;
			left: 501px;
			top: 313px;

			background: #efefef;
			border-radius: 5px;
			border: none;
			margin-bottom: 5px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 300;
			font-size: 15px;
			line-height: 18px;
			color: #949494;
		}
		.description {
			width: 502px;
			height: 66px;
			left: 502px;
			top: 348px;

			background: #efefef;
			border-radius: 5px;
			border: none;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 300;
			font-size: 15px;
			line-height: 18px;
			/* identical to box height */

			color: #949494;
		}
		.submit {
			width: 112px;
			height: 31px;

			border: none;
			background: #1877f2;
			border-radius: 5px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 700;
			font-size: 14px;
			line-height: 17px;

			position: absolute;
			bottom: 16px;
			right: 22px;

			color: #ffffff;
		}
		div {
			padding: 21px 0 0 18px;
		}
	}
	.imgProfile {
		padding: 16px 0 0 18px;
		width: 53px;
		height: 53px;
		border-radius: 26.5px;
	}
`

export const Timeline = styled.div``
export const Post = styled.div`
	margin-bottom: 16px;
	position: relative;
	width: 611px;
	min-height: 276px;
	background: #171717;
	border-radius: 16px;
	display: flex;
	flex-direction: row;
	header {
		width: 100%;
	}
	.first-line {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	ion-icon {
		padding: 19px 0 4px 0;
		color: white;
		font-size: 19.95px;
	}
	.icons {
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 11px;
			line-height: 13px;
			text-align: center;

			color: #ffffff;
		}
	}
	span {
		font-weight: 700;
		color: white;
	}
	p {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 19px;
		line-height: 23px;
		/* identical to box height */

		color: #ffffff;
	}
	h2 {
		padding-top: 7px;
		max-width: 502px;
		height: 52px;
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		line-height: 20px;

		color: #b7b7b7;
	}
	.description {
		padding: 19px 21px 20px 18px;
	}
	.imgProfile {
		padding: 17px 0 0 18px;
		width: 53px;
		height: 53px;
		border-radius: 26.5px;
	}
	.infosUrl {
		div {
			width: 349.56px;
		}
		display: flex;
		flex-direction: row;
		border: 1px solid #4d4d4d;
		border-radius: 11px;
		p {
			overflow: hidden;
			padding: 24px 0 5px 19.31px;
			max-width: 249.98px;
			height: 38px;
			margin: 0px 0 5px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;

			color: #cecece;
		}
		h1 {
			overflow: hidden;
			padding-left: 19.31px;
			max-width: 302.82px;
			height: 39px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 11px;
			line-height: 13px;

			color: #9b9595;
		}
		h2 {
			overflow: hidden;
			padding: 13px 0 23px 19.31px;
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 11px;
			line-height: 13px;

			color: #cecece;
		}
		img {
			width: 153.44px;
			height: 155px;

			background: url(image.png);
			border-radius: 0px 12px 13px 0px;
		}
		width: 503px;
		height: 155px;
	}
`

export const editPost = styled.div`
	position: absolute;
	top: 0;
	right: 50px;
`
