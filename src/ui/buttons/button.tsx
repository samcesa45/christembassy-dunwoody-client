import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-white font-inter text-brand-black cursor-pointer border-black border',
      },
      size: {
        default: 'h-10 sm:h-12 sm:py-3 px-5',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-8 px-4 py-5.5 md:h-10 md:px-7 md:py-7',
        icon: 'size-5 cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      icon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && <span className="sr-only">loading...</span>}
        <span className="">{children}</span>
        {!isLoading && icon && <span className="">{icon}</span>}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
export { Button, buttonVariants };
