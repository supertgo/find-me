import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.lightRed};
		font-size: ${theme.font.sizes.xs};
		margin-top: ${theme.space.xxxsmall};
		text-wrap: nowrap;
	`}
`;
