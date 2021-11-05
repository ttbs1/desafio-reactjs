import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isActive } from "../util/github-api";

export function Home() {

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
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 fst-italic" style={{backgroundColor: '#f2f2f2' }}>
            <form className="col-sm-6 text-center" onSubmit={searchUser}>
                
                <label class="form-label fs-2">Search Devs</label>
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Type the username here..." value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button type="submit" className="btn btn-secondary"><i className="fas fa-search"></i> Buscar</button>
                </div>
            </form>
        </div>
    )
}