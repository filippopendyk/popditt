import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPosts, selectPosts } from "./postsSlice";
import { useDispatch } from "react-redux";
import PostsList from "./PostsList";
import { setFilterAsDefault } from "../filter/filterSlice";

export default function Posts(props){
    let { subreddit } = props;
    const posts = useSelector(selectPosts);
    const { isLoading, error } = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts(subreddit));
        dispatch(setFilterAsDefault());
    },[dispatch,subreddit]);


    if(isLoading) {
        return <div>Loading posts...</div>
    }

    if(error) {
        return (
            <>
                <div>There was an error while loading posts!</div>
                <div>Error message: <strong>{error}</strong></div>
            </>
        )
    }

    return (
        <div>
            <PostsList posts={posts}/>
        </div>
    )
}