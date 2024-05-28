import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
	select {
		padding: ${theme.space.xsmall};
		border: 1px solid ${theme.colors.cleanGrey};
		font-weight: ${theme.font.weights.regular};
		background: ${theme.colors.white};
		font-size: ${theme.font.sizes.xxs};
		color: ${theme.colors.darkTitanium};
	`}
`;

export const Option = styled.option`
	${({ theme }) => css`
		padding: ${theme.space.xxsmall};
		background-color: ${theme.colors.white};
		font-weight: ${theme.font.weights.regular};
		font-size: ${theme.font.sizes.xxs};
		color: ${theme.colors.darkTitanium};
	`}
`;
