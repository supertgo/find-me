import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
	${({ theme }) => css`
		height: 100vh;
		background: ${theme.colors.secondWhite};
		width: 24.2rem;
		padding: ${theme.space.large} 0;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
    box-shadow: 10px 0px 0px 0px #D3D6DB;

		${media.lessThan('large')`
      display: flex;    
      flex-direction: row;
      min-height: min-content;
      height: min-content;
      align-items: center;
      width: 100%;
      padding: ${theme.space.small} 0;

      & > div > p {
        display: none;
      }
    `}

	`}
`;

export const Items = styled.div`
	${({ theme }) => css`
		${media.lessThan('large')`
      display: flex;    
      flex-direction: row;
      height: min-content;
      width: 100%;
      justify-content: space-around;
    `}
    
    ${media.greaterThan('large')`
      margin-top: ${theme.space.large};
    `}
	`}
`;

export const AvatarWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		padding: ${theme.space.small};
		gap: ${theme.space.xxsmall};
		justify-content: space-between;
		align-items: center;

		svg {
			cursor: pointer;
		}

		i {
			margin-right: ${theme.space.small};
		}
	`}
`;

export const Avatar = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 0.2fr 1fr;
		align-items: center;
		gap: ${theme.space.xxsmall};
	`}
`;

export const AvatarPhoto = styled.div`
	width: 4.8rem;
	height: 4.8rem;
	background: gray;
	border-radius: 50%;
`;

export const AvatarInfo = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.xxxsmall};

		p {
			font-weight: ${theme.font.weights.medium};
			font-size: ${theme.font.sizes.smd};
			color: ${theme.colors.darkBlue};
		}
	`}
`;
