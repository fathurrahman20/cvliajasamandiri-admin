import APIClient, { ErrorResponse, FetchResponse } from "@/service/api-client";
import {
  RequirementNoDriverDetailType,
  RequirementNoteDetailType,
  RequirementWithDriverDetailType,
} from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

/* START: Requirement With Driver */
interface RequirementWithDriverRequest {
  id: number;
  description: string;
}
interface RequirementWithDriverResponse {
  id: number;
  description: string;
}

const apiClient = new APIClient<RequirementWithDriverDetailType>(
  "/requirement-with-driver"
);

// Get Requirement Detail with Driver
export const useGetRequirementWithDriver = () =>
  useQuery({
    queryKey: ["requirement-with-driver", 1],
    queryFn: () => {
      return apiClient.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Update Requirement With Driver
const apiClientRequirementWithDriverUpdate =
  new APIClient<RequirementWithDriverResponse>("/requirement-with-driver");
export const useUpdateRequirementWithDriver = () => {
  return useMutation<
    FetchResponse<RequirementWithDriverResponse>,
    AxiosError<ErrorResponse>,
    RequirementWithDriverRequest
  >({
    mutationFn: (data: RequirementWithDriverRequest) => {
      return apiClientRequirementWithDriverUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated requirement with driver successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
/* END: Requirement With Driver */

/* START: Requirement No Driver */
interface RequirementNoDriverCreateRequest {
  title: string;
  description: string;
}
interface RequirementNoDriverRequest {
  id: number;
  title: string;
  description: string;
}
interface RequirementNoDriverResponse {
  id: number;
  title: string;
  description: string;
}

const apiClientRequirementNoDriver = new APIClient<
  RequirementNoDriverDetailType[]
>("/requirement-no-driver");

// Get Requirement No Driver
export const useGetRequirementNoDriver = () =>
  useQuery({
    queryKey: ["requirement-no-driver"],
    queryFn: () => {
      return apiClientRequirementNoDriver.getAll({
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Create Requirement No Driver
const apiClientRequirementNoDriverCreate =
  new APIClient<RequirementNoDriverCreateRequest>("/requirement-no-driver");
export const useCreateRequirementNoDriver = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<RequirementNoDriverResponse>,
    AxiosError<ErrorResponse>,
    RequirementNoDriverCreateRequest
  >({
    mutationFn: (data: RequirementNoDriverCreateRequest) => {
      return apiClientRequirementNoDriverCreate.post(data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requirement-no-driver"] });
      toast.success("S&K Sewa mobil lepas kunci berhasil ditambahkan!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "created failed");
    },
  });
};

// Update Requirment No Driver
const apiClientRequirementNoDriverUpdate =
  new APIClient<RequirementNoDriverResponse>("/requirement-no-driver");
export const useUpdateRequirementNoDriver = () => {
  const queryClient = useQueryClient();
  return useMutation<
    FetchResponse<RequirementNoDriverResponse>,
    AxiosError<ErrorResponse>,
    RequirementNoDriverRequest
  >({
    mutationFn: (data: RequirementNoDriverRequest) => {
      return apiClientRequirementNoDriverUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requirement-no-driver"] });
      toast.success("S&K Sewa mobil lepas kunci berhasil diperbarui!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "Update failed");
    },
  });
};

// Delete Requirment Driver
const apiClientRequirementNoDriverDelete = new APIClient(
  "/requirement-no-driver"
);
export const useDeleteRequirementNoDriver = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => {
      return apiClientRequirementNoDriverDelete.deleteById(id, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requirement-no-driver"] });
      toast.success("Data berhasil dihapus!");
    },
    onError: () => {
      toast.error("Delete failed");
    },
  });
};
/* END: Requirement No Driver */

/* START: Requirement With Driver */
interface RequirementNoteRequest {
  id: number;
  description: string;
}
interface RequirementNoteResponse {
  id: number;
  description: string;
}

const apiClientRequirementNote = new APIClient<RequirementNoteDetailType>(
  "/requirement-note"
);

// Get Requirement Detail with Driver
export const useGetRequirementNote = () =>
  useQuery({
    queryKey: ["requirement-with-driver", 1],
    queryFn: () => {
      return apiClientRequirementNote.get(1, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });

// Update Requirement With Driver
const apiClientRequirementNoteUpdate = new APIClient<RequirementNoteResponse>(
  "/requirement-note"
);
export const useUpdateRequirementNote = () => {
  return useMutation<
    FetchResponse<RequirementNoteResponse>,
    AxiosError<ErrorResponse>,
    RequirementNoteRequest
  >({
    mutationFn: (data: RequirementNoteRequest) => {
      return apiClientRequirementNoteUpdate.patch(data.id, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
    onSuccess: () => {
      toast.success("Updated requirement with driver successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? "update failed");
    },
  });
};
/* END: Requirement With Driver */
