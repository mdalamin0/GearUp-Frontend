"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { FolderOpen } from "lucide-react";

import CategoryDialog from "./CategoryDialog";
import DeleteCategoryButton from "./DeleteCategoryButton";

type Category = {
  id: string;
  name: string;
};

type CategoryTableProps = {
  categories: Category[];
};

const CategoryTable = ({ categories }: CategoryTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <TableRow key={category.id}>
                {/* Category */}

                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <FolderOpen className="size-4 text-primary" />
                    </div>

                    <div>
                      <p className="font-medium">{category.name}</p>

                      <p className="text-sm text-muted-foreground">
                        Gear Category
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant="default">Active</Badge>
                </TableCell>

                {/* Action */}

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <CategoryDialog category={category} />

                    <DeleteCategoryButton categoryId={category.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-40 text-center text-muted-foreground"
              >
                No Category Found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryTable;
