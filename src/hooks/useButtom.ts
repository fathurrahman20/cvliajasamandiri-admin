import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { ButtomDetailType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface ButtomRequest {
  id: number;
  title: string;
  description: string;
}
interface ButtomResponse {
  id: number;
  title: string;
  description: string;
}

const apiClient = new APIClient<ButtomDetailType>("/bottom");

export const useGetButtom = () =>
  useQuery({
    queryKey: ["bottom", 1],
    queryFn: () => {
      return apiClient.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

const apiClientButtomUpdate = new APIClient<ButtomResponse>("/bottom");
export const useUpdateButtom = () => {
  return useMutation<
    FetchResponse<ButtomResponse>,
    AxiosError<ErrorResponse>,
    ButtomRequest
  >({
    mutationFn: (data: ButtomRequest) => {
      return apiClientButtomUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
