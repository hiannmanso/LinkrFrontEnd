import logo from '../../assets/linkr.svg';
import arrow from '../../assets/arrow.svg';
import * as s from './styles.jsx'
import {  useContext } from 'react'
import AuthContext from '../../contexts/AuthContext.jsx'

export default function HeaderTimeline() {
    const {infoUser} = useContext(AuthContext)
    return(
        <s.HeaderContainer>
            <img className='logo' src={logo} alt="linkrLogo" />
            <div>
                <img src={arrow} alt="" />
                {infoUser?<img className='imgProfile' src={infoUser[0].picture} alt="" />:<img className='imgProfile' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZIc2waAh8IoRnPZ4wogdR9iyyVCv_myMLA&usqp=CAU" alt="" />}
                
            </div>
        </s.HeaderContainer>
    )
}