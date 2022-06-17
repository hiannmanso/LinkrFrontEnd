import styled from "styled-components";

const StyledUser = styled.main`
    background-color: #333333;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .box-user{
        width: 80%;
        height: 12vh;
        display: flex;
        align-items: center;
    }
    .user{
        display: flex;
        align-items: center;
    }
    .user-name{
        margin-left: 5px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;
    }
    .user-image{
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
    }
    .container{
        display: flex;
        align-items: center;
    }
    .box-post{
        margin-right: 20px;
        margin-top: 30px;
        height: 80vh;
        overflow-y: scroll;
    }
`;

export {StyledUser}