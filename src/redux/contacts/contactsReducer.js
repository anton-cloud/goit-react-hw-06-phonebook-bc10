import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addToCart,
  changeFilter,
  getAllContactsFromLocaleStorage,
  removeFromCartByID,
} from "./contactsActions.js";

const contactItemsReducer = createReducer([], {
  [addToCart]: (state, { payload }) => [...state, payload],
  [removeFromCartByID]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [getAllContactsFromLocaleStorage]: (state, { payload }) => payload,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
