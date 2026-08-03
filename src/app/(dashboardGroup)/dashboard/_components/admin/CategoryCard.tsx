"use client";

import { FolderOpen, Package } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import CategoryDialog from "./CategoryDialog";
import DeleteCategoryButton from "./DeleteCategoryButton";

type Category = {
  id: string;
  name: string;
};

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FolderOpen className="size-5 text-primary" />

          {category.name}
        </CardTitle>

        <p className="text-sm text-muted-foreground">Gear Category</p>
      </CardHeader>

      <CardContent className="space-y-5">
     
        {/* Status */}

        <div className="flex items-center justify-between">
          <span className="text-sm">Status</span>

          <Badge>Active</Badge>
        </div>

        {/* Actions */}

        <div className="grid grid-cols-2 gap-2">
          <CategoryDialog category={category} />

          <DeleteCategoryButton categoryId={category.id} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
