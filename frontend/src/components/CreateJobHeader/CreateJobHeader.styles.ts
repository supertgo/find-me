import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
    padding: ${theme.space.medium} ${theme.space.large};
	`}
`;

export const Title = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.darkBlue};
		font-weight: ${theme.font.weights.bold};
		font-size: ${theme.font.sizes.xl};
	`}
`;
