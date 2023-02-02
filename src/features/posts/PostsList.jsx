import { useSelector } from "react-redux"
import { selectFilter } from "../filter/filterSlice";

export default function PostsList({posts}){
    const filter = useSelector(selectFilter);

    return (
        <div>
            {
                posts.map((post,index) => <p key={index}>{post.title}</p>)
            }
        </div>
    )
}