import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Checkbox.styles';

export type CheckboxProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef(
  (
    { label, name, ...props }: CheckboxProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <S.Label>
        <S.Checkbox {...props} type="checkbox" name={name} ref={ref} />
        {label}
      </S.Label>
    );
  },
);

export { Checkbox };
