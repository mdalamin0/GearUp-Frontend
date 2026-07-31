"use client";

import Link from "next/link";
import { User, Mail, Lock, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
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

        <form className="mt-8 space-y-6">
          {/* Name */}

          <div className="space-y-2">
            <Label>Full Name</Label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input placeholder="John Doe" className="h-12 pl-10 rounded-xl" />
            </div>
          </div>

          {/* Email */}

          <div className="space-y-2">
            <Label>Email Address</Label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type="email"
                placeholder="john@example.com"
                className="h-12 pl-10 rounded-xl"
              />
            </div>
          </div>

          {/* Password */}

          <div className="space-y-2">
            <Label>Password</Label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type="password"
                placeholder="********"
                className="h-12 pl-10 rounded-xl"
              />
            </div>
          </div>

          {/* Role */}

          <div className="space-y-3">
            <Label>Register As</Label>

            <div className="grid grid-cols-2 gap-4">
              {/* Customer */}

              <button
                type="button"
                className="rounded-2xl border border-primary bg-primary/5 p-5 transition hover:border-primary"
              >
                <User className="mx-auto size-7 text-primary" />

                <h3 className="mt-3 font-semibold">Customer</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Rent outdoor gear.
                </p>
              </button>

              {/* Provider */}

              <button
                type="button"
                className="rounded-2xl border p-5 transition hover:border-primary"
              >
                <Store className="mx-auto size-7 text-primary" />

                <h3 className="mt-3 font-semibold">Provider</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  List your gear.
                </p>
              </button>
            </div>
          </div>

          {/* Button */}

          <Button className="h-12 w-full rounded-xl text-base">
            Create Account
          </Button>
        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
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
