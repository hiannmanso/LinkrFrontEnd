import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { ThreeDots } from "react-loader-spinner"
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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setToken, setID } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    // localStorage.removeItem('token')
    // localStorage.removeItem('id')
    console.log(token, id)
    if (token && id) {
        setToken(token);
        setID(id);
        navigate("/timeline");
    }

    async function authentication(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.postLogin({ email, password });
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.user);
            setToken(response.data.token);
            console.log(response.data.user)
            setID(response.data.user);
            navigate("/timeline");
        } catch (err) {
            console.log("Deu erro no login", err);
            setLoading(false);
            Swal.fire('ERROR!', 'INCORRECT PASSWORD OR EMAIL', 'error');
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
                    {!loading ? <Button type="submit"><p>Log In</p></Button> : <Button disabled><ThreeDots color="#FFFFFF" height={30} width={100} /></Button>}
                    <Link to="/signup">
                        <SignUp>First time? Create an account!</SignUp>
                    </Link>
                </SignIn>
            </Main>
        </>
    )
}