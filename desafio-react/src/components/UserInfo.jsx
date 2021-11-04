export function UserInfo (props) {
    
    return (
        <div className="user_info nav flex-column">
            <ul className="nav flex-column">
                <li className="nav-item">
                    {props.user.avatar}
                </li>
                <li className="nav-item">
                    {props.user.name}
                </li>
                <li className="nav-item">
                    {props.user.location}
                </li>
                <li className="nav-item">
                    {props.user.bio}
                </li>
            </ul>
        </div>
    )
}