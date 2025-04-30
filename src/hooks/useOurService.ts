import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { OurServiceDetailType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

/* START: Our Service */
interface OurServiceCreateRequest {
  title: string;
  description: string;
}
interface OurServiceRequest {
  id: number;
  title: string;
  description: string;
}
interface OurServiceResponse {
  id: number;
  title: string;
  description: string;
}

const apiClientOurService = new APIClient<OurServiceDetailType[]>("/service");

// Get Our Service
export const useGetOurService = () =>
  useQuery({
    queryKey: ["our-service"],
    queryFn: () => {
      return apiClientOurService.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Create Our Service
const apiClientOurServiceCreate = new APIClient<OurServiceCreateRequest>(
  "/service"
);
export const useCreateOurService = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<OurServiceResponse>,
    AxiosError<ErrorResponse>,
    OurServiceCreateRequest
  >({
    mutationFn: (data: OurServiceCreateRequest) => {
      return apiClientOurServiceCreate.post(data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["our-service"] });
      toast.success("Berhasil ditambahkan!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "created failed");
    },
  });
};

// Update Our Service
const apiClientOurServiceUpdate = new APIClient<OurServiceResponse>("/service");
export const useUpdateOurService = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<OurServiceResponse>,
    AxiosError<ErrorResponse>,
    OurServiceRequest
  >({
    mutationFn: (data: OurServiceRequest) => {
      return apiClientOurServiceUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["our-service"] });
      toast.success("Berhasil diperbarui!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "Update failed");
    },
  });
};

// Delete Requirment Driver
const apiClientOurServiceDelete = new APIClient("/service");
export const useDeleteOurService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return apiClientOurServiceDelete.deleteById(id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["our-service"] });
      toast.success("Data berhasil dihapus!");
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });
};
/* END: Our Service */
