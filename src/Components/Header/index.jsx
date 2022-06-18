import logo from '../../assets/linkr.svg';
import arrow from '../../assets/arrow.svg';
import * as s from './styles.jsx'
export default function Header() {
    return(
        <s.HeaderContainer>
            <img className='logo' src={logo} alt="linkrLogo" />
            <div>
                <img src={arrow} alt="" />
                <img className='imgProfile' src="https://m.media-amazon.com/images/I/71ftHg2dwML._AC_SL1500_.jpg" alt="" />
            </div>
        </s.HeaderContainer>
    )
}