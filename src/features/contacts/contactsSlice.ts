import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contact from "./contacts.json";

const initialState = {
  contacts: [],
};

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(setPosts(contact));
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      console.log({ "action.payload": action.payload });

      state.contacts = action.payload;
    },

    // deletePostsById: (state, action) => {
    //   state.posts = state.posts.filter((posts) => posts.id !== action.payload);
    // },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
