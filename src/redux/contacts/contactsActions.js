const ADD_TO_CART = "addToCart";
const REMOVE_FROM_CART_BY_ID = "removeFromCartByID";
const CHANGE_FILTER = "changeFilter";
const GET_ALL_CONTACTS_FROM_LOCAL_STORAGE = "getAllContactsFromLocaleStorage";
// const GET_ALL_CONTACTS = "getAllContacts";

const addToCart = (contact) => ({ type: ADD_TO_CART, payload: contact });
const removeFromCartByID = (id) => ({
  type: REMOVE_FROM_CART_BY_ID,
  payload: id,
});
const getAllContactsFromLocaleStorage = (contacts) => ({
  type: GET_ALL_CONTACTS_FROM_LOCAL_STORAGE,
  payload: contacts,
});

const changeFilter = (value) => ({ type: CHANGE_FILTER, payload: value });

export {
  ADD_TO_CART,
  REMOVE_FROM_CART_BY_ID,
  CHANGE_FILTER,
  GET_ALL_CONTACTS_FROM_LOCAL_STORAGE,
};

export {
  addToCart,
  removeFromCartByID,
  getAllContactsFromLocaleStorage,
  changeFilter,
};
