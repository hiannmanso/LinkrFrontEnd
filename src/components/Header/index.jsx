import {StyledHeader} from './styles'
import { IoSearchOutline,IoChevronDownOutline } from "react-icons/io5";

export default function Header(){
    //`Search for people ${<IoSearchOutline/>}`

    return(
        <StyledHeader>
            <div className='box-header'>
                <p className='logo'>linkr</p>
                
                <input type="text" placeholder={'Search for people'}/>

                <div className='info-user'>
                    <IoChevronDownOutline className='more'/>
                    <p>image user</p>
                </div>
            </div>
            
        </StyledHeader>
    )
}