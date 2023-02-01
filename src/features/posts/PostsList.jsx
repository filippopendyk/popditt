export default function PostsList({posts}){
    return (
        <div>
            {
                posts.map(post => <p>{post.title}</p>)
            }
        </div>
    )
}