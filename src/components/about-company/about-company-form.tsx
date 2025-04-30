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
import { Input } from "@/components/ui/input";
import { useUpdateAboutCompany } from "@/hooks/useCompany";
import { AboutCompanyDetailType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formAboutCompanySchema = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  vision: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  mission: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." }),
  address: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
  phone: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
  email: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
  website: z
    .string()
    .min(5, { message: "Description must be at least 5 characters." })
    .max(255, { message: "Description must be at most 255 characters." }),
});

interface AboutCompanyFormProps {
  data: AboutCompanyDetailType | undefined;
}

export default function AboutCompanyForm({ data }: AboutCompanyFormProps) {
  const { mutate, isPending } = useUpdateAboutCompany();
  const form = useForm<z.infer<typeof formAboutCompanySchema>>({
    resolver: zodResolver(formAboutCompanySchema),
    defaultValues: {
      description: data?.description ? data?.description : "",
      vision: data?.vision ? data?.vision : "",
      mission: data?.mission ? data?.mission : "",
      address: data?.address ? data?.address : "",
      phone: data?.phone ? data?.phone : "",
      email: data?.email ? data?.email : "",
      website: data?.website ? data?.website : "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        description: data.description,
        vision: data.vision,
        mission: data.mission,
        address: data.address,
        phone: data.phone,
        email: data.email,
        website: data.website,
      });
    }
  }, [data, form]);

  function onSubmit(values: z.infer<typeof formAboutCompanySchema>) {
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
          className="space-y-4 justify-start md:grid md:grid-cols-2 md:gap-x-4">
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
                  Contoh: © CV Lia Jasa Mandiri adalah perusahaan rental mobil
                  yang beroperasi sejak tahun 2021.
                </FormDescription>
                <FormDescription className="text-start hidden md:block">
                  <span className="opacity-0">Catatan: </span>
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visi</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Menjadi Perusahaan Rental Mobil Terbaik Dengan Mengedepankan Kualitas Pelayanan."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: Menjadi Perusahaan Rental Mobil Terbaik Dengan
                  Mengedepankan Kualitas Pelayanan.
                </FormDescription>
                <FormDescription className="text-start">
                  Catatan: Pisahkan dengan * jika lebih dari 1
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Misi</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Menjadi mitra yang baik * bertanggung jawab dan dapat dipercaya"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: Menjadi mitra yang baik * bertanggung jawab dan dapat
                  dipercaya
                </FormDescription>
                <FormDescription className="text-start">
                  Catatan: Pisahkan dengan * jika lebih dari 1
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Input placeholder="Perum. TCI 2" {...field} />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: Perum. TCI 2
                </FormDescription>
                <FormDescription className="text-start hidden md:block">
                  <span className="opacity-0">Catatan: </span>
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telepon/WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="081234567890" {...field} />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: 081234567890
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: example@example.com
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="www.cvliajasamandiri.com" {...field} />
                </FormControl>
                <FormDescription className="text-start">
                  Contoh: www.cvliajasamandiri.com
                </FormDescription>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <div className="text-start">
            <Button
              type="submit"
              className="text-white md:mt-5"
              disabled={isPending}>
              {isPending ? "Loading" : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
