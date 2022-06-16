import {StyledUser} from './styles'
import Post from '../../../components/Post'
import Trending from '../../../components/Trending'

export default function Main(){
    return(
        <StyledUser>
            <div className='box-user'>
                <div className='user'>
                    <p className='user-image'>|Image user|  </p>
                    <p className='user-name'>Juvenal Junvêncio's posts</p>
                </div>
            </div>
            <div className='container'>
                <div className='box-post'>
                    <div className='post'>
                        <Post/>
                    </div>
                </div>
                <div className='trending'>
                    <Trending/>
                </div>
            </div>
        </StyledUser>
    )
}