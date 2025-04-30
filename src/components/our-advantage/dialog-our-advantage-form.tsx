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
import { formRequirementSchema } from "@/schema/form-requirement-schema";
import { RequirementNoDriverDetailType } from "@/types";
import { Textarea } from "@/components/ui/textarea";

interface DialogFormProps {
  form: UseFormReturn<z.infer<typeof formRequirementSchema>>;
  onSubmit: (data: z.infer<typeof formRequirementSchema>) => void;
  initialData?: RequirementNoDriverDetailType;
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.title || "Armada Mobil Berkualitas"}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Contoh: Armada Mobil Berkualitas
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    initialData?.description ||
                    "Lia Jasa Mandiri memiliki armada mobil yang terdiri dari berbagai jenis dan merek yang selalu terawat dengan baik."
                  }
                  {...field}
                />
              </FormControl>
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
