import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPosts, selectPosts } from "./postsSlice";
import { useDispatch } from "react-redux";

export default function Posts(props){
    let { subreddit } = props;
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(subreddit));
    },[dispatch, subreddit]);

    return (
        <div>
            {posts}
        </div>
    )
}