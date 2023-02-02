import Posts from "../features/posts/Posts"
import FilterMenu from "../features/filter/FilterMenu";

export default function Home() {
    let subreddit = "Home"

    return (
        <div className="bg-gray-theme px-12">
            <FilterMenu />
            <Posts subreddit={subreddit} />
        </div>
    )
}