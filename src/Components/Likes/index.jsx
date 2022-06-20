import { useState } from "react";
import styled from "styled-components";

export default function Likes(props) {
    const { likes, like, id } = props;
    const [totalLikes, setTotalLikes] = useState(likes);
    const [liked, setLiked] = useState(false);
    return liked ? (
        <Ilike>
            <ion-icon onClick={() => {
                like(id);
                setLiked(false);
                setTotalLikes(totalLikes - 1);
            }} name="heart"></ion-icon>
            <p>{totalLikes}</p>
        </Ilike>
    )
        :
        (
            <Dislike><ion-icon onClick={() => {
                like(id);
                setLiked(true);
                setTotalLikes(totalLikes + 1);
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