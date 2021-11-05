import { useEffect, useState } from "react";
//import { useParams, useHistory } from 'react-router-dom'
import { fetchGithubProfileData } from "../util/github-api";
import { UserInfo } from '../components/UserInfo'

export function Profile (props) {
    const [user, setUser] = useState({});
    //const history = useHistory();
  
    useEffect(() => {
      fetchGithubProfileData(props.match.params.username).then((user) => {
        setUser(user);
      });
    }, [props.match.params.username]);

    return (
        <>
            <UserInfo user={user}></UserInfo>
        </>
    )
}