import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OurAdvantageDetailType } from "@/types";
import DialogRequirementActionButton from "./dialog-our-advantage-action-button";
import DialogRequirementFormHeader from "./dialog-our-advantage-form-header";
import { formRequirementSchema } from "@/schema/form-requirement-schema";
import DialogRequirementForm from "./dialog-our-advantage-form";
import {
  useCreateOurAdvantage,
  useUpdateOurAdvantage,
} from "@/hooks/useOurAdvantage";

interface ModalAddEditOurAdvantage {
  initialData?: OurAdvantageDetailType;
}

const ModalAddEditOurAdvantage = ({
  initialData,
}: ModalAddEditOurAdvantage) => {
  const [isSubmit, setSubmit] = useState(true);
  const isModal = !isSubmit;
  const { mutate: mutateCreate } = useCreateOurAdvantage();
  const { mutate: mutateUpdate } = useUpdateOurAdvantage();
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

export default ModalAddEditOurAdvantage;
