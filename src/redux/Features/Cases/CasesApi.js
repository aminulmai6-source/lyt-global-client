import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CasesApi = createApi({
  reducerPath: "casesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    credentials: "include",
  }),
  tagTypes: ["Cases"],
  endpoints: (builder) => ({
    // Get all cases
    getCases: builder.query({
      query: (filters = {}) => {
        const params = new URLSearchParams();
        if (filters.status && filters.status !== "all")
          params.append("status", filters.status);
        if (filters.caseType && filters.caseType !== "all")
          params.append("caseType", filters.caseType);
        if (filters.assignedTo && filters.assignedTo !== "all")
          params.append("assignedTo", filters.assignedTo);
        return `/cases?${params.toString()}`;
      },
      providesTags: ["Cases"],
    }),

    // Get single case
    getCaseById: builder.query({
      query: (id) => `/cases/${id}`,
      providesTags: (result, error, id) => [{ type: "Cases", id }],
    }),

    // Create new case
    createCase: builder.mutation({
      query: (caseData) => ({
        url: "/cases",
        method: "POST",
        body: caseData,
      }),
      invalidatesTags: ["Cases"],
    }),

    // Update case
    updateCase: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/cases/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Cases",
        { type: "Cases", id },
      ],
    }),

    // Delete case
    deleteCase: builder.mutation({
      query: (id) => ({
        url: `/cases/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cases"],
    }),

    // Get cases assigned to current user
    getMyCases: builder.query({
      query: () => "/cases/my-cases",
      providesTags: ["Cases"],
    }),

    // Generate document for a case
    generateDocument: builder.mutation({
      query: ({ caseId, documentType, data }) => ({
        url: `/cases/${caseId}/documents`,
        method: "POST",
        body: { documentType, data },
      }),
    }),
  }),
});

export const {
  useGetCasesQuery,
  useGetCaseByIdQuery,
  useCreateCaseMutation,
  useUpdateCaseMutation,
  useDeleteCaseMutation,
  useGetMyCasesQuery,
  useGenerateDocumentMutation,
} = CasesApi;

export default CasesApi;
