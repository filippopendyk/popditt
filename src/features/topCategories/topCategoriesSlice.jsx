import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTopCategories = createAsyncThunk(
    'topCategories/fetchTopCategories',
     async(thunkApi) => {
    return fetch('https://www.reddit.com/reddits.json')
    .then(res => res.json())
    .then(data => {
        let arrayOfCategories = data.data.children;
        console.log(arrayOfCategories);
        let topCategoriesAsArrOfStrings = arrayOfCategories.map((element, index) => {
            return arrayOfCategories[index].data.display_name;
        })
        return topCategoriesAsArrOfStrings;
    })
});

const topCategoriesSlice = createSlice({
    name: "topCategories",
    initialState: {
        loading: false,
        topCategories: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopCategories.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTopCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.topCategories = action.payload;
            state.error = '';
        })
        builder.addCase(fetchTopCategories.rejected, (state, action) => {
            state.loading = false;
            state.topCategories = {};
            state.error = action.error.message;
        })
    }
})

export const selectTopCategories = (state) => state.topCategories.topCategories;

export default topCategoriesSlice.reducer;