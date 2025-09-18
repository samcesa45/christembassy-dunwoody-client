'use client'
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';
import { cn } from '@/lib/utils';
import React from 'react';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// type IconLibrary = {
//   [key: string]: React.ComponentType<any>;
// };
// type IconLibrary = Record<string, React.ComponentType<any>>;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    icon?: string;
    registration: Partial<UseFormRegisterReturn>;
  };

type DynamicIconProps = {
  // library?: IconLibrary;
  name?: string;
  // faIcon?: IconDefinition;
  size?: number | string;
  color?: string;
  className?: string;
};
export const DynamicIcon = ({
  // library,
  name,
  // faIcon,
  size = 20,
  color = 'grey',
  className = '',
}: DynamicIconProps) => {
  const [IconComponent, setIconComponent] = React.useState<React.ComponentType<any> | null>(null);
  //Case 1: FontAwesome
  // if (faIcon) {
  //   return <FontAwesomeIcon icon={faIcon} size={typeof size === "string" ? size : undefined} className={className} color={color} />;
  // }

  //Case 2: Other libraries (Lucide, HeroIcons...)

  
  //Lazy import: ensures only the requested icon is bundled
   React.useEffect(() => {
    if (!name) return;

    import('lucide-react')
    .then((icons) => {
      if(icons[name as keyof typeof icons]) {
        setIconComponent(() => icons[name as keyof typeof icons] as React.ComponentType<any>)
      } else {
        console.warn(`Icon "${name}" not found in lucide-react`);
        setIconComponent(null);
      }
    })
    .catch((err) => {
      console.error('Failed to laod icon:', err)
      setIconComponent(null)
    });
  }, [name]);

  if (!IconComponent) return null;

  return <IconComponent size={size} color={color} className={className} />;
};
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type, label, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <div className="relative flex items-center">
          {/* left icon */}
          {icon && (
            <DynamicIcon
              name={icon}
              size={25}
              color="#858689"
              className="absolute left-0 top-1/2 -translate-y-1/2"
            />
          )}
          {/* left icon */}
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
        </div>
      </FieldWrapper>
    );
  },
);

Input.displayName = 'Input';
export { Input };
