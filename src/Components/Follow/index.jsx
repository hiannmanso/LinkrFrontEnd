import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";
import { ThreeDots } from 'react-loader-spinner'

export default function Follow(props) {
    const { userID } = props;
    const [follow, setFollow] = useState(false);
    const token = localStorage.getItem('token');
    const [loading, setLoading] = useState(false);
    console.log(userID);

    useEffect(async () => {
        try {
            const { data } = await api.getFollowing(token);
            if (data.length > 0) {
                const arr = data.filter((item) => {
                    if (item.followed == userID) {
                        return item;
                    }
                });
                console.log(arr, data.length)
                if (arr.length > 0) {
                    setFollow(true);
                }
            }
        } catch (err) {
            console.log("Error in get users i'm following");
        }
    }, []);

    async function followOrUnfollow(userID) {
        setLoading(true);
        setFollow(!follow);
        try {
            await api.setFollowing({ followed: userID }, token);
            setLoading(false);
        } catch (err) {
            alert("error, could not follow user");
            setLoading(false);
        }
    }

    return !follow ? (
        <>
            {!loading ? (
                <FollowComponent onClick={() => followOrUnfollow(userID)}>
                    <p>Follow</p>
                </FollowComponent>) : (

                <FollowComponent disabled>
                    <ThreeDots color="#FFFFFF" height={50} width={40} />
                </FollowComponent>)}
        </>
    )
        :
        (
            <>
                {!loading ? (
                    <UnfollowComponent onClick={() => followOrUnfollow(userID)}>
                        <p>Unfollow</p>
                    </UnfollowComponent>) : (

                    <UnfollowComponent disabled>
                        <ThreeDots color="#1877F2" height={50} width={40} />
                    </UnfollowComponent>
                )
                }
            </>
        )
}

const FollowComponent = styled.button`
    width: 112px;
    height: 31px;
    position: absolute;
    top: 120px;
    right: 200px;
    cursor: pointer;
    background-color: #1877F2;
    border: 0 none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    p{
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
    }
`

const UnfollowComponent = styled.button`
    width: 112px;
    height: 31px;
    position: absolute;
    top: 120px;
    right: 200px;
    cursor: pointer;
    background-color: #FFFFFF;
    border: 0 none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    p{
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #1877F2;
    }
`