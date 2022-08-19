import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { ContactInterface } from "../../interfaces";
import contact from "./contacts.json";

const initialState = {
  contacts: contact,
  isAddingContact: false,
  searchingContacts: [],
};

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(setContacts(contact));
  }
);

export const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      if (action.payload.length) {
        state.contacts = action.payload;
      } else {
        state.contacts = initialState.contacts;
      }
    },

    removeHandler: (state, action) => {
      state.contacts = state.contacts.filter(
        (item: ContactInterface) => item.id !== action.payload
      );
    },

    editHandler: (state, action) => {
      const prevOne = state.contacts.find((item: ContactInterface) => {
        return item.id === action.payload.id;
      });
      if (prevOne) {
        const index = state.contacts.indexOf(prevOne);
        state.contacts.splice(index, 1);
        state.contacts = state.contacts.concat(action.payload);
      }
    },

    onAddContact: (state) => {
      state.isAddingContact = !state.isAddingContact;
    },

    onSaveContact: (state, action) => {
      state.isAddingContact = !state.isAddingContact;
      state.contacts = state.contacts.concat(action.payload);
    },
  },
});

export const {
  setContacts,
  removeHandler,
  editHandler,
  onAddContact,
  onSaveContact,
} = contacts.actions;

export default contacts.reducer;
