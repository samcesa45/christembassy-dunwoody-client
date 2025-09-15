import { type FieldError } from 'react-hook-form';
import { Label } from './label';
import { Error } from './error';

type FieldwrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldwrapperProps,
  'classname' | 'children'
>;

export const FieldWrapper = (props: FieldwrapperProps) => {
  const { label, error, children } = props;
  return (
    <div>
      <Label>
        {label}
        <div className="my-3">{children}</div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  );
};
