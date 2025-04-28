import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { FooterDetailData } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface FooterRequest {
  id: number;
  description: string;
}
interface FooterResponse {
  id: number;
  description: string;
}

const apiClient = new APIClient<FooterDetailData>("/footer");

export const useGetFooter = () =>
  useQuery({
    queryKey: ["footer", 1],
    queryFn: () => {
      return apiClient.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

const apiClientFooterUpdate = new APIClient<FooterResponse>("/footer");
export const useUpdateFooter = () => {
  return useMutation<
    FetchResponse<FooterResponse>,
    AxiosError<ErrorResponse>,
    FooterRequest
  >({
    mutationFn: (data: FooterRequest) => {
      return apiClientFooterUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated footer successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
