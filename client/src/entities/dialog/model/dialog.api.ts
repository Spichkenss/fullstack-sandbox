import { baseApi } from "@/shared/api/baseApi";
import { DialogEntity } from "./dialog.types";

const dialogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDialogs: builder.query<DialogEntity[], void>({
      query: () => "/dialogs",
      providesTags: ["DIALOGS"],
      keepUnusedDataFor: 10,
    }),
  }),
  overrideExisting: true,
});


export const { useGetDialogsQuery } = dialogsApi;