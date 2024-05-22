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

		${media.lessThan('large')`
      display: flex;    
      flex-direction: row;
      min-height: min-content;
      height: min-content;
      align-items: center;
      width: 100%;
      padding: ${theme.space.small} 0;
    `}
	`}
`;

export const Items = styled.div`
	${({ theme }) => css`
		margin-top: ${theme.space.large};
		${media.lessThan('large')`
    display: flex;    
    flex-direction: row;
    height: min-content;
    width: 100%;
    justify-content: space-around;
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
