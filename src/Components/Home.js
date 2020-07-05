import React from 'react';
import SmallCards from "./SmallCards/SmallCards";
import { useSelector } from "react-redux";

export default function Home() {
    const friendList = useSelector(state => state.users);
    return (
        <div className="wrapper">
            {friendList.map(friend => <SmallCards ket={friend.name} name={friend.name} avatar={friend.avatar} />)}
        </div>

    )
}