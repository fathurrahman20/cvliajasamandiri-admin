import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CarDetailType, MutationCarDetailType } from "@/types";
import DialogRequirementActionButton from "./dialog-car-action-button";
import DialogRequirementFormHeader from "./dialog-car-form-header";
import DialogRequirementForm from "./dialog-car-form";
import { useCreateCar, useUpdateCar } from "@/hooks/useCar";
import { formCarSchema } from "@/schema/form-car-schema";

interface ModalAddEditCar {
  initialData?: CarDetailType;
}

type FormCarInput = z.input<typeof formCarSchema>;

const ModalAddEditCar = ({ initialData }: ModalAddEditCar) => {
  const [isSubmit, setSubmit] = useState(true);
  const isModal = !isSubmit;
  const { mutate: mutateCreate } = useCreateCar();
  const { mutate: mutateUpdate } = useUpdateCar();
  const form = useForm<FormCarInput>({
    resolver: zodResolver(formCarSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      brandId: "1", // string
      priceFullDay: "0",
      priceHalfDay: "0",
      year: "",
      fuelType: "",
      transmission: "",
      maxPassengers: "0",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.setValue("name", initialData.name);
      form.setValue("imageUrl", initialData.imageUrl);
      form.setValue("imageId", initialData.imageId);
      form.setValue("brandId", initialData.brandId.toString());
      form.setValue("year", initialData.year.toString());
      form.setValue("priceFullDay", initialData.priceFullDay.toString());
      if (initialData.priceHalfDay)
        form.setValue("priceHalfDay", initialData.priceHalfDay.toString());
      // form.setValue("year", initialData.year);
      form.setValue("fuelType", initialData.fuelType);
      form.setValue("transmission", initialData.transmission);
      form.setValue("maxPassengers", initialData.maxPassengers.toString());
    }
  }, [initialData, form]);

  function handleSubmit(data: z.infer<typeof formCarSchema>) {
    if (initialData) {
      const request: MutationCarDetailType = {
        id: initialData.id,
        ...data,
        brandId: data.brandId
          ? Number(data.brandId)
          : Number(initialData.brandId),
        priceFullDay: data.priceFullDay
          ? Number(data.priceFullDay)
          : Number(initialData.priceFullDay),
        priceHalfDay: data.priceHalfDay
          ? Number(data.priceHalfDay)
          : Number(initialData.priceHalfDay),
        maxPassengers:
          Number(data.maxPassengers) || Number(initialData.maxPassengers),
        year: Number(data.year) || Number(initialData.year),
      };
      mutateUpdate(request);
    } else {
      const request = {
        ...data,
        brandId: Number(data.brandId),
        priceFullDay: Number(data.priceFullDay),
        priceHalfDay: Number(data.priceHalfDay),
        maxPassengers: Number(data.maxPassengers),
        year: Number(data.year),
      };
      mutateCreate(request);
      form.reset();
    }
    setSubmit(true);
    // form.reset();
  }

  return (
    <Dialog modal={isModal}>
      <DialogRequirementActionButton
        initialData={initialData}
        handleSubmit={setSubmit}
      />
      <DialogContent
        className={`sm:max-w-[425px] h-[70%] overflow-y-scroll ${
          isSubmit ? "hidden" : ""
        }`}>
        <DialogRequirementFormHeader initialData={initialData} />
        <DialogRequirementForm
          form={form}
          initialData={initialData}
          onSubmit={handleSubmit}
          // isLoading={isPending}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddEditCar;
