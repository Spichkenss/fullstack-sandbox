import { baseApi } from "@/shared/api/baseApi"
import { configureStore, Tuple } from "@reduxjs/toolkit"
import { StoreSchema } from "./store.schema";

export const createReduxStore = (preloadedState?: StoreSchema) => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  })
}

export type RootState = ReturnType<typeof createReduxStore>['getState'];