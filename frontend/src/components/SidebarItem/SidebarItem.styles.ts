import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type WrapperProps = {
	$selected: boolean;
};

export const Wrapper = styled.a<WrapperProps>`
	${({ theme, $selected }) => css`
		display: flex;
		flex-direction: row;
		align-items: self-end;
		text-decoration: none;
		padding: ${theme.space.xsmall} ${theme.space.xsmall};
		margin: 0 ${theme.space.xsmall};

		svg {
			margin-right: ${theme.space.small};
		}
		${$selected &&
		css`
			p {
				color: ${theme.colors.findBlue};
			}
			background: ${theme.colors.cleanBlue};
			stroke: ${theme.colors.findBlue};
			g {
				stroke: ${theme.colors.findBlue};
			}
		`}
		${media.lessThan('medium')`
      display: flex;    
      flex-direction: column;
      align-items: center;
    `}
	`}
`;

export const LateralBar = styled.div<WrapperProps>`
	${({ theme, $selected }) => css`
		position: relative;
		${$selected &&
		css`
			&::before {
				content: '';
				width: ${theme.space.xxxsmall};
				height: 60%;
				background: ${theme.colors.findBlue};
				position: absolute;
				left: 0;
				top: 10px;
			}
		`}
	`}
`;

export const Text = styled.p`
	${({ theme }) => css`
		color: ${theme.colors.officialGrey};
		font-size: ${theme.font.sizes.sm};
	`}
`;
