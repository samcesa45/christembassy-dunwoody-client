import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';
import { cn } from '@/lib/utils';
import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <input
          type={type}
          // className={cn(
          //   'flex h-12 text-sm sm:text-[1rem] sm:leading-7 w-full opacity-60  font-inter font-normal py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 text-brand-black border-b border-brand-tertiary/30',
          // )}
          className={cn(
            'flex h-12 text-sm sm:text-[1rem] border border-navyblue rounded-md sm:leading-7 w-full  font-inter font-normal py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-b disabled:cursor-not-allowed disabled:opacity-50 text-black',
            className,
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    );
  },
);

Input.displayName = 'Input';
export { Input };
