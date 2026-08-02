"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import GearForm from "./GearForm";

import { ICategory } from "../../types/type";
import { IGear } from "@/types/type";

type EditGearDialogProps = {
  gear: IGear;
  categories: ICategory[];
  trigger: React.ReactNode;
};

const EditGearDialog = ({ gear, categories, trigger }: EditGearDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Edit Gear</DialogTitle>

          <DialogDescription>
            Update your gear information and save the changes.
          </DialogDescription>
        </DialogHeader>

        <GearForm
          mode="edit"
          gear={gear}
          categories={categories}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditGearDialog;
