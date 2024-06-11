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

