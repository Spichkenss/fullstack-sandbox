import { baseApi } from "@/shared/api/baseApi";
import { UserEntity } from "./user.types";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserEntity[], void>({
      query: () => "/users",
      providesTags: ["USERS"]
    }),
  })
})

export const { useGetUsersQuery } = userApi;