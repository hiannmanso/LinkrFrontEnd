import styled from 'styled-components';


export const HeaderContainer = styled.div`

width: 100vw;
height: 72px;
background: #151515;
position: fixed;
top: 0;
z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        padding: 10px 0 8px 28px;
    }
    div{
        padding: 10px 17px 9px;
        display: flex;
        flex-direction: row;
        .imgProfile{
            padding-left: 16.31px;
            width: 53px;
            height: 53px;
            border-radius: 26.5px;
        }
    }
`