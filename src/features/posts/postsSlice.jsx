import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (subreddit, thunkAPI) => {
        
        const url = `https://www.reddit.com/r/${subreddit}.json`
        
        try {
            const response = await fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error(res);
                }
                return res;
            })
            .then((data) => data.json())
            .then(dataJson => {
                const extractedData = dataJson.data.children;
                return extractedData
            })
            .then(extractedData => {
                const arrayOfExtractedPosts = extractedData.map((item) => {
                    return item.data;
                })
                return arrayOfExtractedPosts;
            })
            return response;
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = '';
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    }
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;