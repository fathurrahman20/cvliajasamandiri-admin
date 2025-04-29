import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { RegulationDetailType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface RegulationRequest {
  id: number;
  description: string;
}
interface RegulationResponse {
  id: number;
  description: string;
}

const apiClient = new APIClient<RegulationDetailType>("/regulation");

export const useGetRegulation = () =>
  useQuery({
    queryKey: ["regulation", 1],
    queryFn: () => {
      return apiClient.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

const apiClientRegulationUpdate = new APIClient<RegulationResponse>(
  "/regulation"
);
export const useUpdateRegulation = () => {
  return useMutation<
    FetchResponse<RegulationResponse>,
    AxiosError<ErrorResponse>,
    RegulationRequest
  >({
    mutationFn: (data: RegulationRequest) => {
      return apiClientRegulationUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated regulation successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
