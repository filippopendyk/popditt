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


    console.log(topCategories);
    return (
    <nav className="p-8 flex flex-col">
        {topCategories.loading && <div>Loading...</div>}
        {!topCategories.loading && topCategories.error ? <div>Error: {topCategories.error}</div> : null}
        {!topCategories.loading && topCategories.length ? (
            topCategories.map((element, index) => {
                return <NavLink key={index} to={"/" + element}>{element}</NavLink>
            })
        ) : null}
    </nav>
    )
}