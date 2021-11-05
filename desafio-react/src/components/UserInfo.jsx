import './userInfo.css'

export function UserInfo(props) {

    return (
        <div className="container-fluid p-0 text-break">
            <div className="userinfo col-md-4">
                <div className="d-flex justify-content-center"><img src={props.user.avatar} alt={props.user.username} height="298" width="298" /></div>
                <ul style={{ listStyleType: "none" }}>
                    <li className="name fs-2 fst-italic">
                        {props.user.name}
                        <p className="fs-4">@{props.user.username}</p>
                    </li>
                    <li className="bio" style={{ color: "#8190A5" }}>
                        {props.user.bio}
                    </li>
                    <li className="followers fs-6">
                        <div className="row">
                            <div className="col-auto">
                                <i className="fas fa-users"></i> {props.user.followers} followers
                            </div>
                            <div className="col-auto">
                                <i className="far fa-heart"></i> {props.user.following} following
                            </div>
                        </div>
                    </li>
                    {props.user.company ? <li className="company fs-5"><i className="far fa-building"></i> {props.user.company}</li> : null}
                    {props.user.location ? <li className="location fs-5"><i className="fas fa-map-marker-alt"></i> {props.user.location}</li> : null}
                    {props.user.email ? <li className="email fs-5"><i className="far fa-envelope"></i> {props.user.email}</li> : null}
                    {props.user.blog ? <li className="blog fs-5"><i className="fas fa-link"></i> {props.user.blog}</li> : null}
                    {props.user.twitter ? <li className="twitter fs-5"><i className="fab fa-twitter"></i> {props.user.twitter}</li> : null}
                </ul>
                <div className="d-grid gap-2 col-5 mx-auto"><a href="../../" className="btn btn-light" > Voltar </a></div>
            </div>
            <div className="col-md-8">
                
            </div>
        </div>
    )
}