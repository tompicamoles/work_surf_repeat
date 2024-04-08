import { useParams } from "react-router-dom"

export function Destinations () {

    let {id} = useParams();
    return (
        <div>
            <h1>Destination Id: {id}</h1>
        </div>
    )
}