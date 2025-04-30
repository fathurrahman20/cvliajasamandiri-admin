import { OurAdvantageDetailType } from "@/types";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  initialData?: OurAdvantageDetailType;
}

export default function DialogOurAdvantageFormHeader({ initialData }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>
        {initialData ? "Edit Our Advantage" : "Add Our Advantage"}
      </DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Our Service. Click save when you're
        done.
      </DialogDescription>
    </DialogHeader>
  );
}
