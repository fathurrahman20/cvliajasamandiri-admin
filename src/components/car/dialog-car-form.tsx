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
import { CarDetailType } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { formCarSchema } from "@/schema/form-car-schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetBrand } from "@/hooks/useBrand";

interface DialogFormProps {
  form: UseFormReturn<z.infer<typeof formCarSchema>>;
  onSubmit: (data: z.infer<typeof formCarSchema>) => void;
  initialData?: CarDetailType;
}

export default function DialogRequirementForm({
  form,
  onSubmit,
  initialData,
}: DialogFormProps) {
  const { data } = useGetBrand();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.name || "Innova Reborn"}
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: Innova Reborn</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    initialData?.imageUrl ||
                    "Kami menyediakan layanan rental mobil untuk berbagai keperluan, baik itu untuk perjalanan sehari-hari, liburan,"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brandId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select
                onValueChange={(val) => field.onChange(Number(val))}
                value={String(field.value)}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.data?.map((brand) => (
                    <SelectItem key={brand.id} value={String(brand.id)}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
