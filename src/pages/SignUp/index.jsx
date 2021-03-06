import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StyledSignUp } from './styles'
import api from "../../services/api";

export default function SignUp(){
    const [habilitarCad,setHabilitarCad] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [picture,setPicture] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmitSignUp(e){
        e.preventDefault();
        setHabilitarCad(!habilitarCad);
        const promise = await api.postSignUp({ 
            name: name,
            email:email,
            password: password,
            picture: picture,

        });
        console.log("promise",promise);
        if(promise !== null){
            setHabilitarCad(!habilitarCad);
            navigate('/');
        }else{
            alert("Please try again");
        }   
    }

    return(
        <StyledSignUp>
            <div className='box-logo'>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </div>
            <div className='box-form'>
                <form onSubmit={handleSubmitSignUp}>
                    <input className="input-name" type="text"  placeholder="Username"  required
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input className="input-email" type="email"  placeholder="Email"  required
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <input className="input-password" type="password"  placeholder="password"  required
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <input className="input-picture" type="url"  placeholder="Picture URL" required
                        value={picture} onChange={e => setPicture(e.target.value)}
                    />

                    <button className="botao-input" type='subimit'>
                        {habilitarCad ? 
                            'Loading . . .'
                            : 
                            'SignUp'
                        }
                    </button>
                </form>

                <Link to={"/"}>
                    <p className='link'>Switch back to log in</p>
                </Link>
            </div>
        </StyledSignUp>
    )
}