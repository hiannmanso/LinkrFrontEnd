import styled from "styled-components";

const Main = styled.main`
    display: flex;
    height: 100%;
    box-sizing: border-box;
`

const Slogan = styled.div`
    background-color: #151515;
    width: 70%;
    box-sizing: border-box;
    padding: 50px;
    padding-top: 180px;
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
    box-sizing: border-box;
    width: 30%;
    padding: 50px;
    padding-top: 190px;
`

const Input = styled.input`
    width: 264px;
    height: 40px;
    border-radius: 6px;
    margin-top: 5px;
    border: 0 none;
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

const Button = styled.button`
    width: 270px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1877F2;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 0 none;
    cursor: pointer;

    p {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
    }
`

const SignUp = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
    font-size: 20px;
    a {
        text-decoration-color:#FFFFFF;
    }
`

export {
    Main,
    Slogan,
    SignIn,
    Input,
    Button,
    SignUp
}