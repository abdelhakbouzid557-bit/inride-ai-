"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all duration-200 select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-primary px-7 py-3.5 text-white shadow-brand hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-glow",
        soft: "rounded-full bg-primary-soft px-7 py-3.5 text-primary hover:-translate-y-0.5 hover:bg-[#E2E5FD]",
        outline:
          "rounded-full border border-border bg-white px-7 py-3.5 text-ink shadow-sm hover:-translate-y-0.5 hover:border-primary hover:text-primary",
        ghost:
          "rounded-full px-4 py-2.5 text-ink-soft hover:bg-primary-tint hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-sm",
        sm: "rounded-full px-4 py-2 text-sm",
        lg: "rounded-full px-9 py-4 text-base",
        icon: "rounded-full size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "soft" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };