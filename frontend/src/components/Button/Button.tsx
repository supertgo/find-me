'use client'
import * as S from './Button.styles';
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  variant?: 'primary' | 'secondary';
} & ButtonTypes;

const Button = forwardRef(
  (
    {
      children,
      icon,
      size = 'medium',
      fullWidth = false,
      minimal = false,
      variant = 'primary',
      ...props
    }: ButtonProps,
    ref,
  ) => (
    <S.Wrapper
      size={size}
      $fullWidth={fullWidth}
      $hasIcon={!!icon}
      $minimal={minimal}
      $variant={variant}
      ref={ref}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  ),
);

export { Button };
