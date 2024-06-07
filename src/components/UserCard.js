import { useState } from "react";

const UserCard = ({ name, location }) => {
    const [count] = useState(0)
    const [count2] = useState(8)
    return <div>
        <h1>Count: {count}</h1>
        <h1>Count: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>

    </div>
}

export default UserCard;