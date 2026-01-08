import { useRouteError, Link } from "react-router";

function Error(){
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Ooops!!! {error.status}</h1>
            <h2>{error.statusText}</h2>
            <p><Link to="/">Back Home</Link></p>
        </div>
    )
}
export default Error;