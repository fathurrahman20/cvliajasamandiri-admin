import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteOurService } from "@/hooks/useOurService";
import { Trash2 } from "lucide-react";

export default function DeleteRequirementNoDriver({ id }: { id: number }) {
  const { mutate } = useDeleteOurService();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash2 aria-hidden="true" className="-ml-0.5 size-5" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah sudah yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Ini akan menghapus permanent layanan berikut.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="text-white bg-red-500 hover:bg-red-400"
            onClick={() => mutate(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
