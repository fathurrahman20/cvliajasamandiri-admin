import { CarDetailType } from "@/types";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  initialData?: CarDetailType;
}

export default function DialogCarFormHeader({ initialData }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>{initialData ? "Edit Armada" : "Add Armada"}</DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Armada. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
  );
}
