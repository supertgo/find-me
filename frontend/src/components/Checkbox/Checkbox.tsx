import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Checkbox.styles';

export type CheckboxProps = {
  size?: 'small' | 'medium';
  label: string;
  name?: string;
};

const Checkbox = forwardRef(
  (
    { size = 'medium', label, ...props }: CheckboxProps,
    ref?: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <S.Label $size={size}>
        <S.Checkbox {...props} type="checkbox" name={props.name} ref={ref} />
        {label}
      </S.Label>
    );
  },
);

export { Checkbox };
