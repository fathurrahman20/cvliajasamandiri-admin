import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Button } from "@/components/ui/button";
import { FooterDetailData } from "@/types";
import { useEffect } from "react";
import { useUpdateFooter } from "@/hooks/useFooter";

const formFooterSchema = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
});

interface FooterFormProps {
  data: FooterDetailData | undefined;
}

export default function FooterForm({ data }: FooterFormProps) {
  const { mutate, isPending } = useUpdateFooter();
  const form = useForm<z.infer<typeof formFooterSchema>>({
    resolver: zodResolver(formFooterSchema),
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

  function onSubmit(values: z.infer<typeof formFooterSchema>) {
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
                  <Input placeholder="CV Lia Jasa Mandiri" {...field} />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: © 2025 Lia Jasa Mandiri - Solusi Transportasi
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
