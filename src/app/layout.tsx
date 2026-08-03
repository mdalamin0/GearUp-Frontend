import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "GearUp Rental Platform",
  description: "GearUp - Sports & Outdoor Gear Rental Platform",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("", "font-sans", geist.variable)}
    >
      <body className="">
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="top-right" richColors/>
      </body>
    </html>
  );
}
