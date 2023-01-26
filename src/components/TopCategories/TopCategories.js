import { NavLink } from "react-router-dom"
import topCategoriesSlice from "./topCategoriesSlice"
import './topCategories.css';

export default function TopCategories(){
    return (
    <nav className="p-8 flex flex-col">
        {topCategoriesSlice.map((element) => {
            return <NavLink to={"/" + element.name}>{element.name}</NavLink>;
        })}
    </nav>
    );
}