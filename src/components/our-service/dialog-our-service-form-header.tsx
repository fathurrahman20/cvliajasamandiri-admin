import { OurServiceDetailType } from "@/types";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  initialData?: OurServiceDetailType;
}

export default function DialogOurServiceFormHeader({ initialData }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>
        {initialData ? "Edit OurService" : "Add OurService"}
      </DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Our Service. Click save when you're
        done.
      </DialogDescription>
    </DialogHeader>
  );
}
