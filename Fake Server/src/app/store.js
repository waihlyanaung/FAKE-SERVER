import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../feature/blog";

export const store = configureStore({
    reducer: {
        
        [blogApi
            .reducerPath]: blogApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(blogApi.middleware),
  })