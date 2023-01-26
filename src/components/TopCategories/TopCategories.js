import { NavLink } from "react-router-dom"
import topCategoriesSlice from "./topCategoriesSlice"

export default function TopCategories(){
    return (
    <div className="p-8 flex flex-col">
        {topCategoriesSlice.map((element) => {
            return <NavLink to={"/" + element.name}>{element.name}</NavLink>;
        })}
    </div>
    );
}