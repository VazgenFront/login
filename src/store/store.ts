import { configureStore } from "@reduxjs/toolkit";
import contacts from "../features/contacts/contactsSlice";
import userLogin from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    login: userLogin,
    contacts: contacts,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
