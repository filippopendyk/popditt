import { configureStore } from "@reduxjs/toolkit";
import topCategoriesSlice from "../features/topCategories/topCategoriesSlice";
import postsSlice from "../features/posts/postsSlice";

export default configureStore({
    reducer: {
        topCategories: topCategoriesSlice,
        posts: postsSlice
    }
});