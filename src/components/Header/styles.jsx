import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #151515;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    .box-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }
    .logo{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        color: #FFFFFF;
    }
    .info-user{
        display: flex;
    }
    input{
        width: 463px;
        height: 35px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
    }
    .info-user{
        display: flex;
        align-items: center;
    }
    .more{
        color: #FFFFFF;
        font-size: 30px;
        margin-right: 5px;
    }
`;

export {StyledHeader}