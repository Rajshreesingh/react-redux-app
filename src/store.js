import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootreducer } from "./reducers/Index";
import ReduxThank from "redux-thunk";

const persistConfig = {
  key: "persist-store",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootreducer);
const store = createStore(persistedReducer, applyMiddleware(ReduxThank));
export const persitedStore = persistStore(store);
export default store;
