import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { HeroDetailType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface HeroRequest {
  id: number;
  title: string;
  description: string;
}
interface HeroResponse {
  id: number;
  title: string;
  description: string;
}

const apiClient = new APIClient<HeroDetailType>("/hero");

export const useGetHero = () =>
  useQuery({
    queryKey: ["hero", 1],
    queryFn: () => {
      return apiClient.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

const apiClientHeroUpdate = new APIClient<HeroResponse>("/hero");
export const useUpdateHero = () => {
  return useMutation<
    FetchResponse<HeroResponse>,
    AxiosError<ErrorResponse>,
    HeroRequest
  >({
    mutationFn: (data: HeroRequest) => {
      return apiClientHeroUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated hero successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
