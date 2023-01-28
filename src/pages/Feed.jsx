import { useParams } from "react-router-dom"
import Posts from "../features/posts/Posts";

export default function Feed() {
    let { subreddit } = useParams();

    return (
        <div>
            <Posts subreddit={subreddit}/>
        </div>
    )
}