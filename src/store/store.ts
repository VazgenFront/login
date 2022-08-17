import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/contacts/contactsSlice";
import userLogin from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    posts: userLogin,
    contacts: postSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
