import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "@/components/fragments/themeToggle/themeToggleSlice";

const persistConfig = {
  key: "root",
  storage,
  timeout: 1000,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const makeStore = () => {
  return configureStore({
    reducer: { isDarkMode: persistedThemeReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
