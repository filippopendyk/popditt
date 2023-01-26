import { configureStore } from "@reduxjs/toolkit";
import topCategoriesSlice from "../features/topCategories/topCategoriesSlice";

export default configureStore({
    reducer: {
        topCategories: topCategoriesSlice
    }
});