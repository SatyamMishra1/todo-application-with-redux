import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import persistedReducer from "./persistedReducer";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;