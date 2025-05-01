import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaqDetailType } from "@/types";
import DialogRequirementActionButton from "./dialog-faq-action-button";
import DialogRequirementFormHeader from "./dialog-faq-form-header";
import DialogRequirementForm from "./dialog-faq-form";
import { useCreateFaq, useUpdateFaq } from "@/hooks/useFaq";
import { faqSchema } from "@/schema/faq-schema";

interface ModalAddEditFaq {
  initialData?: FaqDetailType;
}

const ModalAddEditFaq = ({ initialData }: ModalAddEditFaq) => {
  const [isSubmit, setSubmit] = useState(true);
  const isModal = !isSubmit;
  const { mutate: mutateCreate } = useCreateFaq();
  const { mutate: mutateUpdate } = useUpdateFaq();
  const form = useForm<z.infer<typeof faqSchema>>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.setValue("question", initialData.question);
      form.setValue("answer", initialData.answer);
    }
  }, [initialData, form]);

  function handleSubmit(data: z.infer<typeof faqSchema>) {
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

export default ModalAddEditFaq;
