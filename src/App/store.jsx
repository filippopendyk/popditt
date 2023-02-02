import { configureStore } from "@reduxjs/toolkit";
import topCategoriesSlice from "../features/topCategories/topCategoriesSlice";
import postsSlice from "../features/posts/postsSlice";
import filterSlice from "../features/filter/filterSlice";

export default configureStore({
    reducer: {
        topCategories: topCategoriesSlice,
        posts: postsSlice,
        filter: filterSlice
    }
});