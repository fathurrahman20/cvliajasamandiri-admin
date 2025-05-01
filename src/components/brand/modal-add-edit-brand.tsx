import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BrandDetailType } from "@/types";
import DialogRequirementActionButton from "./dialog-brand-action-button";
import DialogRequirementFormHeader from "./dialog-brand-form-header";
import { formBrandSchema } from "@/schema/form-brand-schema";
import DialogRequirementForm from "./dialog-brand-form";
import { useCreateBrand, useUpdateBrand } from "@/hooks/useBrand";

interface ModalAddEditBrand {
  initialData?: BrandDetailType;
}

const ModalAddEditBrand = ({ initialData }: ModalAddEditBrand) => {
  const [isSubmit, setSubmit] = useState(true);
  const isModal = !isSubmit;
  const { mutate: mutateCreate } = useCreateBrand();
  const { mutate: mutateUpdate } = useUpdateBrand();
  const form = useForm<z.infer<typeof formBrandSchema>>({
    resolver: zodResolver(formBrandSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.setValue("name", initialData.name);
    }
  }, [initialData, form]);

  function handleSubmit(data: z.infer<typeof formBrandSchema>) {
    if (initialData) {
      const request = {
        id: initialData.id,
        ...data,
      };
      mutateUpdate(request);
    } else {
      mutateCreate(data);
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
      <DialogContent className={`sm:max-w-[425px] ${isSubmit ? "hidden" : ""}`}>
        <DialogRequirementFormHeader initialData={initialData} />
        <DialogRequirementForm
          form={form}
          initialData={initialData}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddEditBrand;
