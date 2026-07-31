"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../_actions/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
      const res = await loginUser(data);
    
        if (res.success) {
          toast.success(res.message);
          reset();
          
        } else {
          toast.error(res.message);
        }
  };
  return (
    <div className="flex items-center justify-center p-8 lg:p-14">
      <div className="w-full max-w-md">
        {/* Heading */}

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Welcome Back
        </p>

        <h1 className="mt-3 text-4xl font-bold">Login</h1>

        <p className="mt-2 text-muted-foreground">
          Sign in to continue renting and managing outdoor gear.
        </p>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Email */}

          <div className="space-y-2">
            <Label>Email Address</Label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                {...register("email")}
                type="email"
                placeholder="john@example.com"
                className="h-12 rounded-xl pl-10"
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
            <div className="flex items-center justify-between">
              <Label>Password</Label>

              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="*****"
                className="h-12 rounded-xl pl-10 pr-11"
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
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

          {/* Login */}

          <Button
            className="h-12 w-full rounded-xl text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
