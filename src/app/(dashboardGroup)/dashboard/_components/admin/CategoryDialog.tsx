"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Pencil, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateCategory } from "../../_actions/admin/updateCategory";
import { createCategory } from "../../_actions/admin/createCategory";

type CategoryDialogProps = {
  children?: React.ReactNode;
  category?: {
    id: string;
    name: string;
  };
};

const CategoryDialog = ({ children, category }: CategoryDialogProps) => {
  const router = useRouter();

  const isEdit = !!category;

  const [open, setOpen] = useState(false);

  const [name, setName] = useState(category?.name || "");

  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error("Category name is required");
      return;
    }

    startTransition(async () => {
      let res;

      if (isEdit) {
        res = await updateCategory(category.id, {
          name,
        });
      } else {
        res = await createCategory({
          name,
        });
      }

      if (res.success) {
        toast.success(res.message);

        setOpen(false);

        if (!isEdit) {
          setName("");
        }

        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);

        if (value) {
          setName(category?.name || "");
        }
      }}
    >
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant="outline" className="">
            <Pencil className="mr-2 size-4" />
            Edit
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Category" : "Add Category"}</DialogTitle>

          <DialogDescription>
            {isEdit
              ? "Update the category information."
              : "Create a new gear category."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 ">
          <label className="text-sm font-medium ">Category Name</label>

          <Input
            placeholder="Camping"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={isPending}
            onClick={handleSubmit}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Saving...
              </>
            ) : isEdit ? (
              <>
                <Pencil className="mr-2 size-4" />
                Save Changes
              </>
            ) : (
              <>
                <Plus className="mr-2 size-4" />
                Create
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDialog;
