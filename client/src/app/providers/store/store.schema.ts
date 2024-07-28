import { baseApi } from "@/shared/api/baseApi"

export type StoreSchema = {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}