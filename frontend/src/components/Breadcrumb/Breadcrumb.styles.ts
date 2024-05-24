import styled, { css } from 'styled-components';

export type PathProps = {
	$bold: boolean;
};

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.space.xxxsmall};
	`}
`;

export const Path = styled.a<PathProps>`
	${({ theme, $bold }) => css`
		text-decoration: none;
		color: #20243080;

		${$bold &&
		css`
			color: ${theme.colors.darkGrey};
		`}
	`}
`;
