import { NavLink } from "react-router-dom"
import './topCategories.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopCategories } from "./topCategoriesSlice";
import { selectTopCategories } from "./topCategoriesSlice";

export default function TopCategories(){
    const topCategories = useSelector(selectTopCategories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopCategories());
    },[dispatch])

    

    return (
    <nav className="px-8 py-2 flex flex-col">
        {topCategories.loading && <div>Loading...</div>}
        {!topCategories.loading && topCategories.error ? <div>Error: {topCategories.error}</div> : null}
        {!topCategories.loading && topCategories.length ? (
            topCategories.map((element, index) => {
                if(element === "Home"){
                    return null;
                } else{
                    return <NavLink className="my-2" key={index} to={"/" + element}>{element}</NavLink>
                }
            })
        ) : null}
    </nav>
    )
}