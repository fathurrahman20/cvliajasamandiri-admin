import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateRequirementNote } from "@/hooks/useRequirement";
import { RequirementNoteDetailType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
//
const formRequirementNoteSchema = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
});

interface RequirementNoteFormProps {
  data: RequirementNoteDetailType | undefined;
}

export default function RequirementNoteForm({
  data,
}: RequirementNoteFormProps) {
  const { mutate, isPending } = useUpdateRequirementNote();
  const form = useForm<z.infer<typeof formRequirementNoteSchema>>({
    resolver: zodResolver(formRequirementNoteSchema),
    defaultValues: {
      description: data?.description ? data?.description : "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        description: data.description,
      });
    }
  }, [data, form]);

  function onSubmit(values: z.infer<typeof formRequirementNoteSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const data = {
      id: 1,
      ...values,
    };
    mutate(data);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 justify-start">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="E-Tilang tanggung jawab Penyewa.."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: Kirim by WA Foto KTP Penyewa * Menginformasikan titik
                  jemput, etc
                </FormDescription>
                <FormDescription className="text-start">
                  Note: Pisahkan dengan karaketer *
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <div className="text-start">
            <Button type="submit" className="text-white" disabled={isPending}>
              {isPending ? "Loading" : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
