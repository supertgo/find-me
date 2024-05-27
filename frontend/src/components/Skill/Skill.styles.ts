import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: ${theme.space.small};
		background: #f8f8fd;
		padding: ${theme.space.xxsmall};
		margin: ${theme.space.xxxsmall} 0;
		width: min-content;

		span {
			color: ${theme.colors.primary};
			text-wrap: nowrap;
		}

		svg {
			cursor: pointer;
			align-self: end;

			path {
				fill: ${theme.colors.primary};
			}
		}
	`}
`;
