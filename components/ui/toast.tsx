"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast } from "sonner"; // Import `toast` from `sonner`
import { useTheme } from "next-themes";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export const Toaster = () => {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      theme={theme as "light" | "dark"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
};

export function Toast({ title, description, variant = "default" }: ToastProps) {
  toast(
    title || (variant === "destructive" ? "Error" : "Notification"),
    {
      description,
      style:
        variant === "destructive"
          ? { borderColor: "red", color: "red" } // Style for destructive variant
          : undefined,
    }
  );
}
