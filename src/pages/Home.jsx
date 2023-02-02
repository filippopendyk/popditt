import Posts from "../features/posts/Posts"
import FilterMenu from "../features/filter/FilterMenu";

export default function Home() {
    let subreddit = "Home"

    return (
        <>
            <FilterMenu />
            <Posts subreddit={subreddit} />
        </>
    )
}