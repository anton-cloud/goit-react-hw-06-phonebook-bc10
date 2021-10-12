import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART_BY_ID,
  GET_ALL_CONTACTS_FROM_LOCAL_STORAGE,
  CHANGE_FILTER,
} from "./contactsActions";

const contactItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART_BY_ID:
      return state.filter((contact) => contact.id !== action.payload);
    case GET_ALL_CONTACTS_FROM_LOCAL_STORAGE:
      return action.payload;
    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
