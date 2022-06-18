import styled from "styled-components";

const StyledDiv = styled.div`
    background: #171717;
    border-radius: 16px;
    width: 611px;
    height: 276px;
    display: flex;
    padding-top: 15px;
    margin-bottom: 20px;
    position: relative;
    .user-like{
        width: 14%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .user-picture{
        margin-bottom: 20px;
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
    }
    .like{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .like-name{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #FFFFFF;
    }
    .heart-unchecked{
        font-size: 40px;
        color:#FFFFFF;
    }
    .heart-checked{
        font-size: 40px;
        color:#AC0000;
    }
    .content-post{

    }
    .name{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }
    .content{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
    .url{
        position: absolute;
        bottom: 0;

        display: flex;

        margin-bottom: 20px;
        width: 503px;
        height: 155px;
        border: 1px solid #4D4D4D;
        border-radius: 11px;
    }
    .title-url{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #CECECE;
        margin-left: 20px;
        margin-bottom: 5px;
        margin-top: 24px;
    }

    .description-url{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #9B9595;
        margin-left: 20px;
        margin-bottom: 15px;
    }
    .url-link{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #CECECE;
        margin-left: 20px;
        margin-bottom: 5px;
    }
    .image-url{
        width: 153.44px;
        height: 155px;
        background: url(image.png);
        border-radius: 0px 12px 13px 0px;
    }
`;

export {StyledDiv}