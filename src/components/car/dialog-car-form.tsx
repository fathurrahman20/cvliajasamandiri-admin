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
import { useState } from "react";
import toast from "react-hot-toast";
// import Spinner from "../spinner";

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
  const [image, setImage] = useState(form.getValues("imageUrl"));
  const [imageIsLoading, setImageIsLoading] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     form.setValue("imageUrl", reader.result as string);
    //   };
    //   reader.readAsDataURL(file);
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "preset");
    data.append("cloud_name", import.meta.env.VITE_CLOUD_NAME!);

    setImageIsLoading(true);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env
          .VITE_CLOUD_NAME!}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const result = await response.json();
      form.setValue("imageId", result.public_id);
      form.setValue("imageUrl", result.secure_url);
      setImage(result.secure_url);
    } catch (error) {
      console.log(error);
      toast.error("Gagal upload gambar");
    } finally {
      setImageIsLoading(false);
    }
  };
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
                  placeholder={initialData?.name || "All New Avanza"}
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: All New Avanza</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-full">
          <FormLabel>Car photo</FormLabel>
          {/* <label
            htmlFor="cover-photo"
            className="block text-sm/6 font-medium text-gray-900">
            
          </label> */}
          {image && (
            <img
              src={image}
              alt=""
              className="w-50 text-center mx-auto mt-4 -mb-8"
            />
          )}
          {imageIsLoading && !image && <p>Loading...</p>}
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              {/* <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" /> */}
              <div className="mt-4 flex text-sm/6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs/5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={initialData?.imageUrl || "..."}
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
              <FormLabel>Brand</FormLabel>
              <Select
                // onValueChange={(val) => field.onChange(String(val))}
                onValueChange={field.onChange}
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
        <FormField
          control={form.control}
          name="priceFullDay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biaya satu hari</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.priceFullDay.toString() || "350000"}
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: 350000</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priceHalfDay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biaya setengah hari</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    initialData?.priceHalfDay?.toString() || "150000"
                  }
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: 150000</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tahun</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.year.toString() || "2023"}
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: 2023</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fuelType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>BBM</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.fuelType || "Bensin"}
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: Bensin</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transmisi</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.transmission || "Automatic"}
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: Automatic</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxPassengers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Penumpang</FormLabel>
              <FormControl>
                <Input
                  placeholder={initialData?.maxPassengers.toString() || "6"}
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormDescription>Contoh: 6</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" className="text-white">
            Save Changes
          </Button>
          {/* <Button type="submit" className="text-white" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Spinner />
                <span>Loading</span>
              </div>
            ) : (
              "Save changes"
            )}
          </Button> */}
        </DialogFooter>
      </form>
    </Form>
  );
}
