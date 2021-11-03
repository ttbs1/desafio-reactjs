import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isActive } from "../util/github-api";

export function Home () {

    const history = useHistory();
    const [username, setUsername] = useState("");


    async function searchUser(event) {
        event.preventDefault();

        const userExist = await isActive(username);

        if (!userExist) {
        alert("This username does not correspond to an active user.");
        return;
        }

        history.push(`/profile/${username}`);
    }

    return (
        <form onSubmit={searchUser}>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button type="submit"/>
        </form>
    )
}