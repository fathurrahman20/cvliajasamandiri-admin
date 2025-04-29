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
import { useUpdateRequirementWithDriver } from "@/hooks/useRequirement";
import { RequirementWithDriverDetailType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
//
const formRequirementWithDriverSchema = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
});

interface RequirementWithDriverFormProps {
  data: RequirementWithDriverDetailType | undefined;
}

export default function RequirementWithDriverForm({
  data,
}: RequirementWithDriverFormProps) {
  const { mutate, isPending } = useUpdateRequirementWithDriver();
  const form = useForm<z.infer<typeof formRequirementWithDriverSchema>>({
    resolver: zodResolver(formRequirementWithDriverSchema),
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

  function onSubmit(values: z.infer<typeof formRequirementWithDriverSchema>) {
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
