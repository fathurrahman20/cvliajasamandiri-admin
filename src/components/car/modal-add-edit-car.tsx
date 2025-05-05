// import { useEffect, useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
import { CarDetailType } from "@/types";
// import DialogRequirementActionButton from "./dialog-car-action-button";
// import DialogRequirementFormHeader from "./dialog-car-form-header";
// import DialogRequirementForm from "./dialog-car-form";
// import { useCreateCar, useUpdateCar } from "@/hooks/useCar";
// import { formCarSchema } from "@/schema/form-car-schema";

interface ModalAddEditCar {
  initialData?: CarDetailType;
}

// type FormCarInput = z.input<typeof formCarSchema>;

// const ModalAddEditCar = ({ initialData }: ModalAddEditCar) => {
//   const [isSubmit, setSubmit] = useState(true);
//   const isModal = !isSubmit;
//   const { mutate: mutateCreate } = useCreateCar();
//   const { mutate: mutateUpdate } = useUpdateCar();
//   const form = useForm<FormCarInput>({
//     resolver: zodResolver(formCarSchema),
//     defaultValues: {
//       name: "",
//       imageUrl: "",
//       brandId: "1", // string
//       priceFullDay: 0,
//       priceHalfDay: 0,
//       year: "",
//       fuelType: "",
//       transmission: "",
//       maxPassengers: 0,
//     },
//   });

//   useEffect(() => {
//     if (initialData) {
//       form.setValue("name", initialData.name);
//       form.setValue("imageUrl", initialData.imageUrl);
//       form.setValue("brandId", initialData.brandId.toString());
//       form.setValue("year", initialData.year.toString());
//       form.setValue("priceFullDay", initialData.priceFullDay);
//       if (initialData.priceHalfDay)
//         form.setValue("priceHalfDay", initialData.priceHalfDay);
//       // form.setValue("year", initialData.year);
//       form.setValue("fuelType", initialData.fuelType);
//       form.setValue("transmission", initialData.transmission);
//       form.setValue("maxPassengers", initialData.maxPassengers);
//     }
//   }, [initialData, form]);

//   function handleSubmit(data: z.infer<typeof formCarSchema>) {
//     if (initialData) {
//       const request = {
//         id: initialData.id,
//         ...data,
//       };
//       mutateUpdate(request);
//     } else {
//       mutateCreate(data);
//       form.reset();
//     }
//     setSubmit(true);
//     // form.reset();
//   }

//   return (
//     <Dialog modal={isModal}>
//       <DialogRequirementActionButton
//         initialData={initialData}
//         handleSubmit={setSubmit}
//       />
//       <DialogContent className={`sm:max-w-[425px] ${isSubmit ? "hidden" : ""}`}>
//         <DialogRequirementFormHeader initialData={initialData} />
//         <DialogRequirementForm
//           form={form}
//           initialData={initialData}
//           onSubmit={handleSubmit}
//         />
//       </DialogContent>
//     </Dialog>
//   );
// };

const ModalAddEditCar = ({ initialData }: ModalAddEditCar) => {
  console.log(initialData);
};

export default ModalAddEditCar;
