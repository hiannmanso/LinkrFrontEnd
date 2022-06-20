import * as s from './styles.jsx'
import AuthContext from '../../contexts/AuthContext.jsx'
import { useContext } from 'react'
import axios from 'axios'

export default function ModalDelete(item) {
    function deletePost(item){
        console.log(item.postID)
        axios({
            method:"delete",
            url:`http://localhost:5000/posts/${item.postID}`
        }).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    const {displayModal,setDisplayModal } = useContext(AuthContext)
    return(
    <s.Modal display={displayModal}>
        <s.Opacity onClick={()=>{setDisplayModal("none")}}/>
        <s.ModalContainer >
            <h1>Are you sure you want to delete this post?</h1>

            <div>
                <button className='no' onClick={()=>{setDisplayModal("none")}} >No, go back</button>
                <button className='yes' onClick={()=>{deletePost(item)}}>Yes, delete it</button>
            </div>
        </s.ModalContainer>
    
    </s.Modal>
    )
}