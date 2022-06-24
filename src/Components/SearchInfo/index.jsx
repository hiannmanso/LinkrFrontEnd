import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";

export default function SearchInfo(props) {
    const { index, userID, picture, name, idLocal, token } = props;
    console.log(userID)
    // const [following, setFollowing] = useState([])
    const [iFollow, setIFollow] = useState(false);
    const navigate = useNavigate();


    useEffect(async () => {
        const { data } = await api.getFollowing(token);
        for (let i = 0; i < data.length; i++) {
            if (data[i].followed === userID && data[i].followed != idLocal) {
                setIFollow(true);
            }
        }
    }, [])

    return (
        <div key={index} className='infoSearch'
            onClick={() => {
                navigate('/user/' + userID)
                navigate(0)
            }}
        >
            <img src={picture} alt='profile' />
            <p>{name}</p>
            <>
                {iFollow ? <span>• following</span> : <></>}
            </>
        </div>
    )


}