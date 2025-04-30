import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OurServiceDetailType } from "@/types";
import DialogRequirementActionButton from "./dialog-our-service-action-button";
import DialogRequirementFormHeader from "./dialog-our-service-form-header";
import { formRequirementSchema } from "@/schema/form-requirement-schema";
import DialogRequirementForm from "./dialog-our-service-form";
import {
  useCreateOurService,
  useUpdateOurService,
} from "@/hooks/useOurService";

interface ModalAddEditOurService {
  initialData?: OurServiceDetailType;
}

const ModalAddEditOurService = ({ initialData }: ModalAddEditOurService) => {
  const [isSubmit, setSubmit] = useState(true);
  const isModal = !isSubmit;
  const { mutate: mutateCreate } = useCreateOurService();
  const { mutate: mutateUpdate } = useUpdateOurService();
  const form = useForm<z.infer<typeof formRequirementSchema>>({
    resolver: zodResolver(formRequirementSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.setValue("title", initialData.title);
      form.setValue("description", initialData.description);
    }
  }, [initialData, form]);

  function handleSubmit(data: z.infer<typeof formRequirementSchema>) {
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

export default ModalAddEditOurService;
