import Posts from "../features/posts/Posts"

export default function Home() {
    let subreddit = "Home"

    return (
        <Posts subreddit={subreddit} />
    )
}