"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../_schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginUser } from "../_actions/login";
import { googleLogin } from "../_actions/googleLogin";

import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

import jwt, { JwtPayload } from "jsonwebtoken";

import GoogleLoginButton from "./GoogleLoginButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirectTo") ?? "";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Demo account credentials

  const demoCredentials = {
    CUSTOMER: {
      email: "alamin1@gmail.com",
      password: "12345",
    },
    PROVIDER: {
      email: "jakir@gmail.com",
      password: "12345",
    },
    ADMIN: {
      email: "admin@gmail.com",
      password: "admin123",
    },
  };

  const onSubmit = async (data: LoginSchemaType) => {
    const res = await loginUser(redirectTo, data);

    if (res.success) {
      toast.success(res.message);

      const decodedToken = jwt.decode(res.data.accessToken) as JwtPayload;

      reset();

      if (
        redirectTo &&
        typeof redirectTo === "string" &&
        redirectTo.startsWith("/") &&
        !redirectTo.startsWith("//")
      ) {
        router.push(redirectTo);
        return;
      }

      if (decodedToken.role === "CUSTOMER") {
        router.push("/dashboard/customer");
      } else if (decodedToken.role === "PROVIDER") {
        router.push("/dashboard/provider");
      } else if (decodedToken.role === "ADMIN") {
        router.push("/dashboard/admin");
      }
    } else {
      toast.error(res.message);
    }
  };

  // Quick login handler
  const handleDemoLogin = (role: "CUSTOMER" | "PROVIDER" | "ADMIN") => {
    const credentials = demoCredentials[role];

    setValue("email", credentials.email, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setValue("password", credentials.password, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleGoogleSuccess = async (idToken: string) => {
    const result = await googleLogin(idToken);

    if (result.success) {
      toast.success(result.message);
      if (
        redirectTo &&
        typeof redirectTo === "string" &&
        redirectTo.startsWith("/") &&
        !redirectTo.startsWith("//")
      ) {
        router.push(redirectTo);
        return;
      }
      router.push("/dashboard/customer");
    } else {
      toast.error(result.message);
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

        {/* Quick Login */}
        <div className="mt-6">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            1 Click Login
          </p>

          <div className="grid grid-cols-3 gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleDemoLogin("CUSTOMER")}
              disabled={isSubmitting}
              className="h-8 sm:h-10 rounded-xl text-xs sm:text-sm"
            >
              Customer
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => handleDemoLogin("PROVIDER")}
              disabled={isSubmitting}
              className="h-8 sm:h-10 rounded-xl text-xs sm:text-sm"
            >
              Provider
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => handleDemoLogin("ADMIN")}
              disabled={isSubmitting}
              className="h-8 sm:h-10 rounded-xl text-xs sm:text-sm"
            >
              Admin
            </Button>
          </div>
        </div>

        {/* Login Form */}
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
            type="submit"
            className="h-12 w-full rounded-xl text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-3 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Note */}
        <p className="my-2 text-center text-xs text-orange-400">
          Note: Google Sign-In is currently available for Customer accounts
          only.
        </p>

        {/* Google Login */}
        <div className="min-h-22 w-full">
          <GoogleLoginButton onSuccess={handleGoogleSuccess} />
        </div>

        {/* Register */}
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
