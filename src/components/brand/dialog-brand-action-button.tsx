import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
// import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import { BrandDetailType } from "@/types";
import { PencilIcon, PlusIcon } from "lucide-react";

interface Props {
  initialData?: BrandDetailType;
  handleSubmit: (isSubmit: boolean) => void;
}
export default function DialogBrandActionButton({
  initialData,
  handleSubmit,
}: Props) {
  return (
    <DialogTrigger asChild>
      <Button
        size="sm"
        variant={initialData && "secondary"}
        onClick={() => handleSubmit(false)}
        className="text-white">
        {initialData ? (
          <PencilIcon aria-hidden="true" className="-ml-0.5 size-5" />
        ) : (
          <PlusIcon aria-hidden="true" className="-ml-0.5 size-5" />
        )}
        {initialData ? "Edit" : "Add"}
      </Button>
    </DialogTrigger>
  );
}
