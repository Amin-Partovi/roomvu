import { configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "@/components/fragments";

export const makeStore = () => {
  return configureStore({
    reducer: { isDarkMode: themeReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
