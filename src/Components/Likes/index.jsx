import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../services/api";

export default function Likes(props) {
    const { likes, id } = props;
    const [totalLikes, setTotalLikes] = useState(likes);
    const [liked, setLiked] = useState(false);
    const token = localStorage.getItem('token');
    const [usersLikes, setUsersLikes] = useState('');
    const arr = [];

    useEffect(() => {
        try {
            const promise = api.getUsersLikes();
            setUsersLikes(promise.data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    async function like(postID) {
        console.log(postID);
        try {
            await api.setLike({ postID }, token);
            const promise = await api.getPostById(postID);
            setTotalLikes(promise.data.quantityLikes);
        } catch (err) {
            setLiked(false);
            console.log("Error in like", err);
        }
    }

    return liked ? (
        <Ilike>
            <ion-icon onClick={() => {
                like(id);
                setLiked(false);
            }} name="heart"></ion-icon>
            <p>{totalLikes}</p>
        </Ilike>
    )
        :
        (
            <Dislike><ion-icon onClick={() => {
                like(id);
                setLiked(true);
            }} name="heart-outline"></ion-icon>
                <p>{totalLikes}</p>
            </Dislike>
        )
}

const Ilike = styled.div`
    ion-icon[name="heart"] {
        color: red;
    }
`

const Dislike = styled.div`
    ion-icon[name="heart-outline"] {
        color: #FFF;
    }
`