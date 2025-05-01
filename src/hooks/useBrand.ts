import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { BrandDetailType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

/* START: Brand */
interface BrandCreateRequest {
  name: string;
}
interface BrandRequest {
  id: number;
  name: string;
}
interface BrandResponse {
  id: number;
  name: string;
}

const apiClientBrand = new APIClient<BrandDetailType[]>("/brands");

// Get Brand
export const useGetBrand = () =>
  useQuery({
    queryKey: ["brand"],
    queryFn: () => {
      return apiClientBrand.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Create Brand
const apiClientBrandCreate = new APIClient<BrandCreateRequest>("/brands");
export const useCreateBrand = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<BrandResponse>,
    AxiosError<ErrorResponse>,
    BrandCreateRequest
  >({
    mutationFn: (data: BrandCreateRequest) => {
      return apiClientBrandCreate.post(data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brand"] });
      toast.success("Berhasil ditambahkan!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "created failed");
    },
  });
};

// Update Brand
const apiClientBrandUpdate = new APIClient<BrandResponse>("/brands");
export const useUpdateBrand = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<BrandResponse>,
    AxiosError<ErrorResponse>,
    BrandRequest
  >({
    mutationFn: (data: BrandRequest) => {
      return apiClientBrandUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brand"] });
      toast.success("Berhasil diperbarui!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "Update failed");
    },
  });
};

// Delete Requirment Driver
const apiClientBrandDelete = new APIClient("/brands");
export const useDeleteBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return apiClientBrandDelete.deleteById(id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brand"] });
      toast.success("Data berhasil dihapus!");
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });
};
/* END: Brand */
