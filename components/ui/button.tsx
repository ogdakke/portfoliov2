import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2  disabled:opacity-50 dark:focus-visible:ring-neutral-400 disabled:pointer-events-none dark:focus-visible:ring-offset-neutral-900 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800",
  {
    variants: {
      variant: {
        default:
          "bg-accent-5 text-white hover:bg-neutral-700 dark:bg-accent-solid-white dark:text-neutral-900 dark:hover:bg-accent-6 dark:hover:text-neutral-100",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-accent-4/15 hover:bg-accent-4/20 dark:border-accent-4/10 dark:text-neutral-200/95",
        subtle:
          "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100",
        ghost:
          "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}

      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
