import { baseApi } from "../../api/baseApi";

export const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
          query: () => ({
            url: "/academic-semester",
            method: "GET"
          }),
        }),
      }),
})

export const {useGetAllSemestersQuery} = academicSemesterApi;