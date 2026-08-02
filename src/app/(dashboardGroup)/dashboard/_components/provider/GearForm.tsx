"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { gearSchema, TGearForm } from "../../_schema/gear.validation";
import { ICategory } from "../../types/type";
import { createGear } from "../../_actions/provider/createGear";
import z from "zod";


type GearFormProps = {
  categories: ICategory[];
};

const GearForm = ({ categories }: GearFormProps) => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof gearSchema>>({
    resolver: zodResolver(gearSchema),

    defaultValues: {
      title: "",
      description: "",
      brand: "",
      categoryId: "",
      rentalPrice: 1,
      stock: 1,
      image: "",
      length: "",
      maxLoad: "",
      material: "",
      weight: "",
    },
  });

const onSubmit = async (values: TGearForm) => {
  const payload = {
    title: values.title,
    description: values.description,
    brand: values.brand,
    rentalPrice: Number(values.rentalPrice),
    stock: Number(values.stock),
    image: values.image,
    categoryId: values.categoryId,
    specifications: {
      length: values.length,
      maxLoad: values.maxLoad,
      material: values.material,
      weight: values.weight,
    },
  };

  try {
    const res = await createGear(payload);
    if (res.success) {
      toast.success(res.message);
      router.push("/dashboard/provider");
      // router.refresh();
    } else {
      toast.error(res.message);
    }
  } catch {
    toast.error("Something went wrong");
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic Information */}

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            Enter the basic details about your rental gear.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-5 md:grid-cols-2">
          {/* Title */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>

            <Input placeholder="Camping Tent" {...register("title")} />

            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>

          {/* Brand */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Brand</label>

            <Input placeholder="NatureHike" {...register("brand")} />

            {errors.brand && (
              <p className="text-sm text-destructive">{errors.brand.message}</p>
            )}
          </div>

          {/* Category */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>

            <Controller
              control={control}
              name="categoryId"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>

                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            {errors.categoryId && (
              <p className="text-sm text-destructive">
                {errors.categoryId.message}
              </p>
            )}
          </div>

          {/* Image */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>

            <Input
              placeholder="https://example.com/image.jpg"
              {...register("image")}
            />

            {errors.image && (
              <p className="text-sm text-destructive">{errors.image.message}</p>
            )}
          </div>

          {/* Rental Price */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Rental Price</label>

            <Input type="number" {...register("rentalPrice")} />

            {errors.rentalPrice && (
              <p className="text-sm text-destructive">
                {errors.rentalPrice.message}
              </p>
            )}
          </div>

          {/* Stock */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Stock</label>

            <Input type="number" {...register("stock")} />

            {errors.stock && (
              <p className="text-sm text-destructive">{errors.stock.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Description */}

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>

          <CardDescription>Describe your gear in detail.</CardDescription>
        </CardHeader>

        <CardContent>
          <Textarea
            className="min-h-36"
            placeholder="Write detailed description..."
            {...register("description")}
          />

          {errors.description && (
            <p className="mt-2 text-sm text-destructive">
              {errors.description.message}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Specifications */}

      <Card>
        <CardHeader>
          <CardTitle>Specifications</CardTitle>

          <CardDescription>
            Technical specifications of your gear.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Length</label>

            <Input placeholder="10 ft" {...register("length")} />

            {errors.length && (
              <p className="text-sm text-destructive">
                {errors.length.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Max Load</label>

            <Input placeholder="140 kg" {...register("maxLoad")} />

            {errors.maxLoad && (
              <p className="text-sm text-destructive">
                {errors.maxLoad.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Material</label>

            <Input placeholder="Aluminum" {...register("material")} />

            {errors.material && (
              <p className="text-sm text-destructive">
                {errors.material.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Weight</label>

            <Input placeholder="3 kg" {...register("weight")} />

            {errors.weight && (
              <p className="text-sm text-destructive">
                {errors.weight.message}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full">
        {isSubmitting ? "Creating..." : "Create Gear"}
      </Button>
    </form>
  );
};

export default GearForm;
