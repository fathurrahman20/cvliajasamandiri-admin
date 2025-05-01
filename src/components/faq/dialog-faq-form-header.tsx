import { FaqDetailType } from "@/types";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  initialData?: FaqDetailType;
}

export default function DialogFaqFormHeader({ initialData }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>{initialData ? "Edit FAQ" : "Add FAQ"}</DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} FAQ. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
  );
}
