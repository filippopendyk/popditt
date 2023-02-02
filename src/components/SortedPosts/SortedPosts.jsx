import Post from "../Post/Post";

export default function SortedPosts({filteredPosts}){

    return(
        <ul>
            {filteredPosts.map((post,index) => (
                <Post post={post} key={index}/>
            ))}
        </ul>
    )

}