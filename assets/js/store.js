import { persistStore } from "redux-persist";
import { createStore } from "redux";

import rootReducer from "./Redux/root.reducer";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
