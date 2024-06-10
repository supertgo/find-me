import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { PersonIcon as PersonIconRadix } from '@radix-ui/react-icons';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { AvatarProps } from './Avatar';
import { DefaultTheme } from 'styled-components/dist/types';

type AvatarRootProps = {
	$size?: AvatarProps['size'];
};

const avatarRootModifiers = {
  small: (theme: DefaultTheme) => css`
		width: 4.5rem;
		height: 4.5rem;
	`,
	large: (theme: DefaultTheme) => css`
		width: 12.4rem;
		height: 12.4rem;

    ${AvatarFallback} {
      font-size: ${theme.space.xxxlarge};
    }
	`,
};

export const AvatarRoot = styled(AvatarPrimitive.Root)<AvatarRootProps>`
	${({ theme, $size = 'small' }) => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		overflow: hidden;
		user-select: none;
		border-radius: 100%;
		background-color: ${theme.colors.white};
		border: 1px solid ${theme.colors.primary};

    ${avatarRootModifiers[$size](theme)}
	`}
`;

export const AvatarImage = styled(AvatarPrimitive.Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`;

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary};
		font-size: 1.5rem;
		line-height: 0.1rem;
		font-weight: 500;
	`}
`;

export const PersonIcon = styled(PersonIconRadix)`
	${({ theme }) => css`
		color: ${theme.colors.darkBlue};
	`}
`;

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		text-decoration: none;
		gap: ${theme.space.xsmall};
	`}
`;

export const Username = styled.p`
	${({ theme }) => css`
		font-weight: ${theme.font.weights.medium};
		font-size: ${theme.font.sizes.smd};
		color: ${theme.colors.darkBlue};
		${media.lessThan('medium')`
      display: none;
    `}
	`}
`;
