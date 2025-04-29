import { RequirementNoDriverDetailType } from "@/types";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Props {
  initialData?: RequirementNoDriverDetailType;
}

export default function DialogRequirementFormHeader({ initialData }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>
        {initialData ? "Edit Requirement" : "Add Requirement"}
      </DialogTitle>
      <DialogDescription>
        {initialData ? "Edit " : "Add "} Requirement. Click save when you're
        done.
      </DialogDescription>
    </DialogHeader>
  );
}
