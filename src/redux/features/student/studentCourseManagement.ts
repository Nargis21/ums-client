import { TOfferedCourse, TQueryParams, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudentOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["myOfferedCourse"],
      transformResponse: (response: TResponseRedux<TOfferedCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    enrollCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["myOfferedCourse"],
    }),
  }),
});

export const { useGetAllStudentOfferedCoursesQuery, useEnrollCourseMutation } =
  studentCourseApi;
