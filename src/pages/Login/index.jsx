import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext"
import {
    Main,
    Slogan,
    SignIn,
    Input,
    Button,
    SignUp
} from "./styles";
import api from "../../services/api";
import "../../css/global.css"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    async function authentication(e) {
        e.preventDefault();

        try {
            const { data } = await api.postLogin({ email, password });
            console.log(data);
            setToken(data);
            navigate("/feed");
        } catch (err) {
            console.log("Deu erro no login", err);
        }
    }

    return (
        <>
            <Main>
                <Slogan>
                    <h1>linkr</h1>
                    <h2>save, share and discover the best links on the web</h2>
                </Slogan>
                <SignIn onSubmit={authentication}>
                    <Input type="email" placeholder="e-mail" name="email" onChange={e => setEmail(e.target.value)} value={email} required />
                    <Input type="password" placeholder="password" name="password" onChange={e => setPassword(e.target.value)} value={password} required />
                    <Button type="submit"><p>Log In</p></Button>
                    <Link to="/signup">
                        <SignUp>First time? Create an account!</SignUp>
                    </Link>
                </SignIn>
            </Main>
        </>
    )
}