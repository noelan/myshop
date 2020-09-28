const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    // Je veux garder les item qui ont un id différent de l'item passer et une size différent de l'item donner
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.size !== action.payload.size
        ),
      };
    case "CHECKOUT":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

// Si itemToAdd.id est égal a un des article de cartItems, j'additionne leur quantité
const addItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  // item with same id
  let currentItems = [];
  cartItems.forEach((cartItem) => {
    if (cartItem.id === itemToAdd.id) {
      currentItems.push(cartItem);
    }
  });

  // ForEach item with same id then item to add, if size are even set sameSize to true
  let sameSize = false;
  if (currentItems) {
    currentItems.forEach((item) => {
      if (item.size == itemToAdd.size) {
        sameSize = true;
      }
    });
  }

  // add quantity where size and id even
  if (existingCartItem && sameSize) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id && cartItem.size === itemToAdd.size
        ? { ...cartItem, quantity: cartItem.quantity + itemToAdd.quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: itemToAdd.quantity }];
};

export default cartReducer;
