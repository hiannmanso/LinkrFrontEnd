import logo from '../../assets/linkr.svg';
import arrow from '../../assets/arrow.svg';
import * as s from './styles.jsx'
import { useContext, useState } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'
import { Link, useNavigate } from 'react-router-dom';
import Home from '../../pages/Home/index.jsx';

export default function HeaderTimeline() {
    const { infoUser } = useContext(AuthContext);
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();
    function goOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate("/");
    }

    return !logout ? (
        <s.HeaderContainer>
            <Link to={<Home />}>
                <img className='logo' src={logo} alt="linkrLogo" />
            </Link>
            <div>
                <img onClick={() => { setLogout(true) }} src={arrow} alt="" />
                {infoUser ? <img className='imgProfile' src={infoUser[0].picture} alt="" /> : <img className='imgProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU" alt="" />}

            </div>
        </s.HeaderContainer>
    )
        :
        (
            <>

                <s.HeaderContainer onClick={() => { setLogout(false) }}>
                    <Link to={<Home />}>
                        <img className='logo' src={logo} alt="linkrLogo" />
                    </Link>
                    <div>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                        {infoUser ? <img className='imgProfile' src={infoUser[0].picture} alt="" /> : <img className='imgProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU" alt="" />}
                    </div>
                </s.HeaderContainer>
                <s.LogoutButton onClick={() => { goOut() }}>
                    <div>
                        <h1>Logout</h1>
                    </div>
                </s.LogoutButton>
            </>
        )
}