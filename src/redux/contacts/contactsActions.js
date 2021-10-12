import { createAction } from "@reduxjs/toolkit";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART_BY_ID,
  CHANGE_FILTER,
  GET_ALL_CONTACTS_FROM_LOCAL_STORAGE,
} from "./contactsTypes.js";

const addToCart = createAction(ADD_TO_CART);
const removeFromCartByID = createAction(REMOVE_FROM_CART_BY_ID);
const getAllContactsFromLocaleStorage = createAction(
  GET_ALL_CONTACTS_FROM_LOCAL_STORAGE
);
const changeFilter = createAction(CHANGE_FILTER);

export {
  addToCart,
  removeFromCartByID,
  getAllContactsFromLocaleStorage,
  changeFilter,
};
