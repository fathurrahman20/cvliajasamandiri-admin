import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { FaqDetailType } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { faqSchema } from "@/schema/faq-schema";

interface DialogFormProps {
  form: UseFormReturn<z.infer<typeof faqSchema>>;
  onSubmit: (data: z.infer<typeof faqSchema>) => void;
  initialData?: FaqDetailType;
}

export default function DialogRequirementForm({
  form,
  onSubmit,
  initialData,
}: DialogFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    initialData?.question || "Apa saja syarat yang dibutuhkan"
                  }
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Contoh: Apa saja syarat yang dibutuhkan
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    initialData?.answer ||
                    "Syarat dan ketentuan rental mobil bergantung pada jenis layanan yang Anda pilih."
                  }
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Contoh: Syarat dan ketentuan rental mobil bergantung pada jenis
                layanan yang Anda pilih.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" className="text-white">
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
