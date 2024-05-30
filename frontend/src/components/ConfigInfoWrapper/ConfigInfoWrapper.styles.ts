import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
	$hasBorder?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, $hasBorder }) => css`
		display: grid;
		grid-template-columns: 0.5fr 1fr;
		padding: ${theme.space.medium} 0;
		margin: 0 ${theme.space.large};
		gap: ${theme.space.large};

		${$hasBorder &&
		css`
			border-bottom: 1px solid ${theme.colors.whiteGrey};
		`}

		${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
	`}
`;

export const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const RightContent = styled.div``;

export const Title = styled.h5`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.sm};
		font-weight: ${theme.font.weights.medium};
		color: ${theme.colors.darkBlue};
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.sm};
		font-weight: ${theme.font.weights.regular};
		color: ${theme.colors.darkTitanium};
		margin-top: ${theme.space.xxsmall};
	`}
`;
