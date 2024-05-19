import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		padding: ${theme.space.xxsmall} ${theme.space.small};
		font-size: ${theme.font.sizes.smd};
		font-weight: 500;

		span {
			color: ${theme.colors.grey900};
		}
	`}
`;
