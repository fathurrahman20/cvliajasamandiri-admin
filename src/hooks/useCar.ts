import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import { CarDetailType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

/* START: Car */
interface CarCreateRequest {
  name: string;
  // imageId: string;
  imageUrl: string;
  brandId: number;
  priceFullDay: number;
  priceHalfDay?: number;

  year: number; // Tahun mobil dibuat
  fuelType: string; // Bensin, Solar, Listrik, Hybrid, dll.
  transmission: string; // Manual atau Automatic
  maxPassengers: number; // Maksimal jumlah penumpang
}
interface CarRequest {
  id: number;
  name: string;
  // imageId: string;
  imageUrl: string;
  brandId: number;
  priceFullDay: number;
  priceHalfDay?: number;

  year: number; // Tahun mobil dibuat
  fuelType: string; // Bensin, Solar, Listrik, Hybrid, dll.
  transmission: string; // Manual atau Automatic
  maxPassengers: number; // Maksimal jumlah penumpang
}
interface CarResponse {
  id: number;
  name: string;
  // imageId: string;
  imageUrl: string;
  brandId: number;
  priceFullDay: number;
  priceHalfDay?: number;

  year: number; // Tahun mobil dibuat
  fuelType: string; // Bensin, Solar, Listrik, Hybrid, dll.
  transmission: string; // Manual atau Automatic
  maxPassengers: number; // Maksimal jumlah penumpang
}

const apiClientCar = new APIClient<CarDetailType[]>("/cars");

// Get Car
export const useGetCar = () =>
  useQuery({
    queryKey: ["car"],
    queryFn: () => {
      return apiClientCar.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Create Car
const apiClientCarCreate = new APIClient<CarCreateRequest>("/cars");
export const useCreateCar = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<CarResponse>,
    AxiosError<ErrorResponse>,
    CarCreateRequest
  >({
    mutationFn: (data: CarCreateRequest) => {
      return apiClientCarCreate.post(data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car"] });
      toast.success("Berhasil ditambahkan!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "created failed");
    },
  });
};

// Update Car
const apiClientCarUpdate = new APIClient<CarResponse>("/cars");
export const useUpdateCar = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<CarResponse>,
    AxiosError<ErrorResponse>,
    CarRequest
  >({
    mutationFn: (data: CarRequest) => {
      return apiClientCarUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car"] });
      toast.success("Berhasil diperbarui!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "Update failed");
    },
  });
};

// Delete Requirment Driver
const apiClientCarDelete = new APIClient("/cars");
export const useDeleteCar = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return apiClientCarDelete.deleteById(id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car"] });
      toast.success("Data berhasil dihapus!");
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });
};
/* END: Car */
