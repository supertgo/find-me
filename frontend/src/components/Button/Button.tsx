'use client';
import * as S from './Button.styles';
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ring } from 'ldrs';

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
	isLoading?: boolean;
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
			isLoading = false,
			...props
		}: ButtonProps,
		ref,
	) => {
		ring.register();
		return (
			<S.Wrapper
				size={size}
				$fullWidth={fullWidth}
				$hasIcon={!!icon}
				$minimal={minimal}
				$variant={variant}
				ref={ref}
				{...props}
			>
				{isLoading ? (
					<l-ring
						size="25"
						stroke="5"
						bg-opacity="0"
						speed="2"
						color="white"
					></l-ring>
				) : (
					<>
						{icon}
						{!!children && <span>{children}</span>}
					</>
				)}
			</S.Wrapper>
		);
	},
);

export { Button };
