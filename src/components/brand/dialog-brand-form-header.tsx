import { BrandDetailType } from "@/types";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  initialData?: BrandDetailType;
}

export default function DialogBrandFormHeader({ initialData }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>{initialData ? "Edit Brand" : "Add Brand"}</DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Brand. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
  );
}
