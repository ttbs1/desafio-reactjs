import React from "react"
import "./reposInfo.css"

export function ReposInfo(props) {

    function date (datetime) {
        let date = new Date(datetime).toLocaleString();

        return date;
    }

    const reposList = props.repos.map(
        (r) => {
            return (
                <div className="repository" key={r.id}>
                    <a href={r.url} target="_blank" rel="noreferrer" className="repos-name fs-4">{r.name}</a>
                    <p className="description">{r.description}</p>
                    <p className="stars"><i className="far fa-star"></i> {r.stars} • Atualizado em: {date(r.lastUpdate)}</p>
                </div>
            )
        }
    )

    return (
        <div className="col-md-8 d-flex justify-content-center p-0">
            <div className="col-md-10" style={{ margin: "30px 0 30px 0" }}>
                {reposList}
            </div>
        </div>
    )
}