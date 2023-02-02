export default function SortedPosts({filteredPosts}){

    return(
        <ul>
            {filteredPosts.map((post,index) => (
                <li key={index}>{post.ups},{post.created}</li>
            ))}
        </ul>
    )

}