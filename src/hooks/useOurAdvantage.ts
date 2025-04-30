import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { OurAdvantageDetailType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

/* START: Our Advantage */
interface OurAdvantageCreateRequest {
  title: string;
  description: string;
}
interface OurAdvantageRequest {
  id: number;
  title: string;
  description: string;
}
interface OurAdvantageResponse {
  id: number;
  title: string;
  description: string;
}

const apiClientOurAdvantage = new APIClient<OurAdvantageDetailType[]>(
  "/advantage"
);

// Get Our Advantage
export const useGetOurAdvantage = () =>
  useQuery({
    queryKey: ["our-advantage"],
    queryFn: () => {
      return apiClientOurAdvantage.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Create Our Advantage
const apiClientOurAdvantageCreate = new APIClient<OurAdvantageCreateRequest>(
  "/advantage"
);
export const useCreateOurAdvantage = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<OurAdvantageResponse>,
    AxiosError<ErrorResponse>,
    OurAdvantageCreateRequest
  >({
    mutationFn: (data: OurAdvantageCreateRequest) => {
      return apiClientOurAdvantageCreate.post(data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["our-advantage"] });
      toast.success("Berhasil ditambahkan!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "created failed");
    },
  });
};

// Update Our Advantage
const apiClientOurAdvantageUpdate = new APIClient<OurAdvantageResponse>(
  "/advantage"
);
export const useUpdateOurAdvantage = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<OurAdvantageResponse>,
    AxiosError<ErrorResponse>,
    OurAdvantageRequest
  >({
    mutationFn: (data: OurAdvantageRequest) => {
      return apiClientOurAdvantageUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["our-advantage"] });
      toast.success("Berhasil diperbarui!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "Update failed");
    },
  });
};

// Delete Requirment Driver
const apiClientOurAdvantageDelete = new APIClient("/advantage");
export const useDeleteOurAdvantage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return apiClientOurAdvantageDelete.deleteById(id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["our-advantage"] });
      toast.success("Data berhasil dihapus!");
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });
};
/* END: Our Advantage */
