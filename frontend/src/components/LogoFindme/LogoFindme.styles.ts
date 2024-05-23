import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { LogoFindmeProps } from './LogoFindme';

export type WrapperProps = {
	$variant: LogoFindmeProps['variant'];
};

const variantsModifiers = {
	secondary: (theme: DefaultTheme) => css`
		color: ${theme.colors.white};
		align-self: start;
	`,
};

export const LogoFindme = styled.p<WrapperProps>`
	${({ theme, $variant = '' }) => css`
		font-weight: ${theme.font.weights.bold};
		font-size: 2.4rem;
		color: ${theme.colors.primary};
		text-align: center;
		${$variant === 'secondary' && variantsModifiers[$variant](theme)};
	`}
`;
