import { Plus } from "lucide-react";
import CategoryTable from "../../_components/admin/CategoryTable";
import CategoryCard from "../../_components/admin/CategoryCard";
import CategoryDialog from "../../_components/admin/CategoryDialog";
import { getCategories } from "@/app/(publicGroup)/_actions/gear/getCategories";
import { ICategory } from "@/types/type";

const CategoriesPage = async () => {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>

          <p className="mt-2 text-muted-foreground">
            Manage gear categories across the platform.
          </p>
        </div>

        <CategoryDialog>
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 size-4" />
            Add Category
          </button>
        </CategoryDialog>
      </div>

      {/* Count */}

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Total Categories{" "}
          <span className="font-semibold text-foreground">
            {categories.length}
          </span>
        </p>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">
        <CategoryTable categories={categories} />
      </div>

      {/* Mobile */}

      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {categories.length > 0 ? (
          categories.map((category: ICategory) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">
            <h3 className="text-lg font-semibold">No Categories Found</h3>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              Create your first category to organize gear.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
