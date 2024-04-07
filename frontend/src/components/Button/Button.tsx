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
} & ButtonTypes;

const Button = forwardRef(
  (
    {
      children,
      icon,
      size = 'medium',
      fullWidth = false,
      minimal = false,
      ...props
    }: ButtonProps,
    ref,
  ) => (
    <S.Wrapper
      size={size}
      $fullWidth={fullWidth}
      $hasIcon={!!icon}
      $minimal={minimal}
      ref={ref}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  ),
);

export { Button };
