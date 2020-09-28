export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const removeItem = () => ({
  type: "REMOVE_ITEM",
});

export const clearItem = (item) => ({
  type: "CLEAR_ITEM",
  payload: item,
});

export const checkout = () => ({
  type: "CHECKOUT",
});
