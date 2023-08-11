
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (page, { rejectWithValue }) => {
    try {
        const res = await axios.get(`https://dummyjson.com/posts?skip=${page}&limit=10`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err?.response?.data)
    }
})
export const fetchPost = createAsyncThunk('post/fetchPost', async (id, { rejectWithValue }) => {
    try {
        const res = await axios.get(`https://dummyjson.com/posts/${id}`);
        console.log(id)
        console.log(res.data)
        return res.data;
    } catch (err) {
        return rejectWithValue(err?.response?.data)
    }
})


const initialState = {
    posts: [],
    post: {},
    currentPage: 0,
    hasMore: true,
    loading: true,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        resetPosts(state) {
            state.posts = initialState.posts; // Сбрасываем posts до начального значения
            state.currentPage = 0;
            state.hasMore = true;
        },
    },
    extraReducers: (builder) => {
        builder
            // FETCHING ALL POSTS
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.posts.length > 0) {
                    state.posts = [...state.posts, ...action.payload.posts]
                    state.currentPage++;
                    state.hasMore = action.payload.posts.length === 10;
                } else {
                    // Это последняя страница, устанавливаем hasMore в false
                    state.hasMore = false;
                }
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
            })
            // FETCHING BY ID POST
            .addCase(fetchPost.pending, (state) => {
                state.post = {};
                state.loading = true;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.posts = []
                state.currentPage = 0;
                state.loading = false;
            })
            .addCase(fetchPost.rejected, (state) => {
                state.post = {};
                state.loading = true;
            })
    }
})
export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;