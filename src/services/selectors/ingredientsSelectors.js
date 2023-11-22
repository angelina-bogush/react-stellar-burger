export const allIngredients = (store) =>
  store.allIngredientsReducer.allIngredients;
export const selectIngredientById = (id) => (store) =>
  store.allIngredientsReducer.allIngredients.find(
    (ingredients) => ingredients._id === id
  );
export const getCurrentItem = (state) => state.modalReducer.currentIngredient;
export const orders = (store) => store.feedReducer.orders;
export const total = (store) => store.feedReducer.total;
export const totalToday = (store) => store.feedReducer.totalToday;
export const profileOrders = (store) => store.profileFeedReducer.orders;
