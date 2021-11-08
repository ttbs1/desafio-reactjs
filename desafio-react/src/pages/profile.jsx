import { useEffect, useState } from "react";
//import { useParams, useHistory } from 'react-router-dom'
import { fetchGithubProfileData } from "../util/github-api";
import { UserInfo } from '../components/UserInfo';
import { ReposInfo } from "../components/ReposInfo";

export function Profile(props) {
    const [user, setUser] = useState({});
    //const history = useHistory();

    useEffect(() => {
        fetchGithubProfileData(props.match.params.username).then((user) => {
            setUser(user);
        });
    }, [props.match.params.username]);

  return (
      <>
          <div className="container-fluid text-break" style={{ backgroundColor: "#FAFAFA", color: "#3B4252" }}>
            <div className="row">
              <UserInfo user={user}></UserInfo>
              {user && user.repos && (
                  <ReposInfo repos={user.repos}></ReposInfo>
              )}
            </div>
          </div>
      </>
  )
}