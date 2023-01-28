import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (subreddit, thunkAPI) => {
        const url = `https://www.reddit.com/r/${subreddit}.json`
        await fetch(url)
        .then(function(response) {
            const data = response.json();
            return(data);
        })
        .then(function(data){
            console.log(data.data.children);
        })
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: '',
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.posts = '';
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = '';
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = '';
            state.error = action.error.message;
        })
    }
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;