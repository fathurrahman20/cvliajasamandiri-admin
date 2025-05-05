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
      <DialogTitle>
        {initialData ? "Edit Our Service" : "Add Our Service"}
      </DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Our Service. Click save when you're
        done.
      </DialogDescription>
    </DialogHeader>
  );
}
