import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { FaqDetailType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

/* START: FAQ */
interface FaqCreateRequest {
  question: string;
  answer: string;
}
interface FaqRequest {
  id: number;
  question: string;
  answer: string;
}
interface FaqResponse {
  id: number;
  question: string;
  answer: string;
}

const apiClientFaq = new APIClient<FaqDetailType[]>("/faq");

// Get FAQ
export const useGetFaq = () =>
  useQuery({
    queryKey: ["faq"],
    queryFn: () => {
      return apiClientFaq.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Create FAQ
const apiClientFaqCreate = new APIClient<FaqCreateRequest>("/faq");
export const useCreateFaq = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<FaqResponse>,
    AxiosError<ErrorResponse>,
    FaqCreateRequest
  >({
    mutationFn: (data: FaqCreateRequest) => {
      return apiClientFaqCreate.post(data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faq"] });
      toast.success("Berhasil ditambahkan!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "created failed");
    },
  });
};

// Update FAQ
const apiClientFaqUpdate = new APIClient<FaqResponse>("/faq");
export const useUpdateFaq = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<FaqResponse>,
    AxiosError<ErrorResponse>,
    FaqRequest
  >({
    mutationFn: (data: FaqRequest) => {
      return apiClientFaqUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faq"] });
      toast.success("Berhasil diperbarui!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "Update failed");
    },
  });
};

// Delete Requirment Driver
const apiClientFaqDelete = new APIClient("/faq");
export const useDeleteFaq = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return apiClientFaqDelete.deleteById(id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faq"] });
      toast.success("Data berhasil dihapus!");
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });
};
/* END: FAQ */
