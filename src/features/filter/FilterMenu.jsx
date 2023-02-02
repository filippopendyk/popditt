import { setFilterAsBest, setFilterAsTop, setFilterAsNew, selectFilter } from "./filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./FilterMenu.css";

export default function FilterMenu(){
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const handleBest = (event) => {
        event.preventDefault();
        dispatch(setFilterAsBest())
    }

    const handleTop = (event) => {
        event.preventDefault();
        dispatch(setFilterAsTop())
    }

    const handleNew = (event) => {
        event.preventDefault();
        dispatch(setFilterAsNew());
    }

    return (
        <div className="my-4 flex">
            <button className={filter === "best" ? "activeClass" : null} onClick={handleBest}>Best</button>
            <button className={filter === "top" ? "activeClass" : null} onClick={handleTop}>Top</button>
            <button className={filter === "new" ? "activeClass" : null} onClick={handleNew}>New</button>
        </div>
    )

}