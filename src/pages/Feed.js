import { useParams } from "react-router-dom";

export default function Feed() {
   let { feedTopic } = useParams();

    return (
        <div>
            <h2>{feedTopic}</h2>
        </div>
    )
}