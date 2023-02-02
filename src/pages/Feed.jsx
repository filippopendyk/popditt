import { useParams } from "react-router-dom"
import Posts from "../features/posts/Posts";
import FilterMenu from "../features/filter/FilterMenu";

export default function Feed() {
    let { subreddit } = useParams();

    return (
        <div>
            <FilterMenu/>
            <Posts subreddit={subreddit}/>
        </div>
    )
}