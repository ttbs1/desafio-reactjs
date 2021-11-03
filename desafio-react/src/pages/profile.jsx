import { useParams } from 'react-router-dom'

export function Profile () {

    const { username } = useParams()

    return (
        <div>{username}</div>
    )
}