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
import { HeroDetailType } from "@/types";
import { useEffect } from "react";
import { useUpdateFooter } from "@/hooks/useFooter";

const heroFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
});

interface HeroFormProps {
  data: HeroDetailType | undefined;
}

export default function HeroForm({ data }: HeroFormProps) {
  const { mutate, isPending } = useUpdateFooter();
  const form = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      title: data?.title ? data?.title : "",
      description: data?.description ? data?.description : "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title,
        description: data.description,
      });
    }
  }, [data, form]);

  function onSubmit(values: z.infer<typeof heroFormSchema>) {
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
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sewa & Rental Mobil Terbaik di kawasan Cikarang Selatan"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: Sewa & Rental Mobil Terbaik di kawasan Cikarang
                  Selatan
                </FormDescription>
                <FormMessage className="text-start" />
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
                  <Input
                    placeholder="Selamat datang di Lia Jasa Mandiri. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: Selamat datang di Lia Jasa Mandiri. Kami menyediakan
                  mobil kualitas terbaik dengan harga terjangkau.
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
