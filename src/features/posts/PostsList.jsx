import { useSelector } from "react-redux"
import { selectFilter } from "../filter/filterSlice";
import SortedPosts from "../../components/SortedPosts/SortedPosts";

export default function PostsList({posts}){
    const filter = useSelector(selectFilter);

    console.log(posts);

    if(filter === 'best'){
        return <SortedPosts filteredPosts={posts}/>
    }

    if(filter === "top"){
        let filteredPosts = posts.slice(0);
        filteredPosts.sort((a,b) => {
            if(a.ups > b.ups) return -1;
            if(a.ups < b.ups) return 1;
            return 0;
        })

        return <SortedPosts filteredPosts={filteredPosts}/>

    }

    if(filter === "new"){
        let filteredPosts = posts.slice(0);
        filteredPosts.sort((a,b) => {
            if(a.created > b.created) return -1;
            if(a.created < b.created) return 1;
            return 0;
        })
        
        return <SortedPosts filteredPosts={filteredPosts}/>
    }

    return (
      <>
        <p>This is filtered posts Component</p>
      </>
    )
}