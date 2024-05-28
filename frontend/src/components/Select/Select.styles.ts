import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
	select {
		padding: ${theme.space.xsmall};
		border-radius: 0;
		border: 1px solid ${theme.colors.cleanGrey};
		font-weight: ${theme.font.weights.regular};
		background: ${theme.colors.white};
		font-size: ${theme.font.sizes.xxs};
		color: ${theme.colors.darkTitanium};
	}
`;

export const Option = styled.option`
	padding: ${theme.space.xxsmall};
	background-color: ${theme.colors.white};
	font-weight: ${theme.font.weights.regular};
	font-size: ${theme.font.sizes.xxs};
	color: ${theme.colors.darkTitanium};
`;
