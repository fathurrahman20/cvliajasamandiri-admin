import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { AboutCompanyDetailType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const apiClient = new APIClient<AboutCompanyDetailType>("/about-us");

export const useGetAboutCompany = () =>
  useQuery({
    queryKey: ["about-us", 1],
    queryFn: () => {
      return apiClient.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

const apiClientAboutCompanyUpdate = new APIClient<AboutCompanyDetailType>(
  "/about-us"
);
export const useUpdateAboutCompany = () => {
  return useMutation<
    FetchResponse<AboutCompanyDetailType>,
    AxiosError<ErrorResponse>,
    AboutCompanyDetailType
  >({
    mutationFn: (data: AboutCompanyDetailType) => {
      return apiClientAboutCompanyUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated About Company successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
