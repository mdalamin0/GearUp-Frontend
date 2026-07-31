"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Store, User, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchemaType } from "../schema/register.schema";
import { cn } from "@/lib/utils";
import { registerUser } from "../_actions/register";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    },
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: RegisterSchemaType) => {
    const res = await registerUser(data);

    if (res.success) {
      toast.success(res.message);
      reset();
      router.push("/auth/login");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-8 lg:p-14">
      <div className="w-full max-w-md">
        {/* Heading */}

        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Welcome to GearUp
        </p>

        <h1 className="mt-3 text-4xl font-bold">Create Account</h1>

        <p className="mt-2 text-muted-foreground">
          Create your account and start renting or listing outdoor gear.
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
          className="mt-8 space-y-6"
        >
          {/* Name */}

          <div className="space-y-2">
            <Label>Full Name</Label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type="text"
                {...register("name")}
                placeholder="John Doe"
                className={cn(
                  "h-12 pl-10 rounded-xl",
                  errors.email &&
                    "border-destructive focus-visible:ring-destructive",
                )}
              />
            </div>
            <div className="min-h-4">
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}

          <div className="space-y-2">
            <Label>Email Address</Label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                {...register("email")}
                type="email"
                placeholder="john@example.com"
                className={cn(
                  "h-12 pl-10 rounded-xl",
                  errors.email &&
                    "border-destructive focus-visible:ring-destructive",
                )}
              />
            </div>
            <div className="min-h-4">
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Password */}

          <div className="space-y-2">
            <Label>Password</Label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={cn(
                  "h-12 rounded-xl pl-10 pr-10",
                  errors.password &&
                    "border-destructive focus-visible:ring-destructive",
                )}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            <div className="min-h-4">
              {errors.password && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Role */}

          <div className="space-y-3">
            <Label>Register As</Label>

            <div className="grid grid-cols-2 gap-4">
              {/* Customer */}

              <button
                type="button"
                onClick={() =>
                  setValue("role", "CUSTOMER", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                className={cn(
                  "relative rounded-2xl border p-5 transition-all duration-300",
                  selectedRole === "CUSTOMER"
                    ? "border-primary bg-primary/5 shadow-md"
                    : "hover:border-primary",
                )}
              >
                {selectedRole === "CUSTOMER" && (
                  <Check className="absolute right-3 top-3 size-5 text-primary" />
                )}

                <User className="mx-auto size-7 text-primary" />

                <h3 className="mt-3 font-semibold">Customer</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Rent outdoor gear.
                </p>
              </button>

              {/* Provider */}

              <button
                type="button"
                onClick={() =>
                  setValue("role", "PROVIDER", {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
                className={cn(
                  "relative rounded-2xl border p-5 transition-all duration-300",
                  selectedRole === "PROVIDER"
                    ? "border-primary bg-primary/5 shadow-md"
                    : "hover:border-primary",
                )}
              >
                {selectedRole === "PROVIDER" && (
                  <Check className="absolute right-3 top-3 size-5 text-primary" />
                )}

                <Store className="mx-auto size-7 text-primary" />

                <h3 className="mt-3 font-semibold">Provider</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  List your gear.
                </p>
              </button>
            </div>
          </div>
          <input type="hidden" {...register("role")} />
          {/* Button */}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl text-base"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
