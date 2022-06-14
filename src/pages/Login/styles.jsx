import styled from "styled-components";

const Main = styled.main`
    display: flex;
`

const Slogan = styled.div`
    background-color: #151515;

    h1 {
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 106px;
        color: #FFFFFF;
    }

    h2 {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;
    }
`

const SignIn = styled.form`
    background-color: #333333;
`

const Input = styled.input`
    width: 429px;
    height: 65px;
    border-radius: 6px;
    &:focus{
        outline: none;
    }

    &::placeholder {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        color: #9F9F9F;
        padding: 7px;
    }
`

const Button = styled.input`
    width: 429px;
    height: 65px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1877F2;
    cursor: pointer;

    p {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 27px;
    }
`

const SignUp = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 20px;
`

export {
    Main,
    Slogan,
    SignIn,
    Input,
    Button,
    SignUp
}