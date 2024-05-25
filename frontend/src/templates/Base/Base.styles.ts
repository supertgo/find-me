import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type WrapperProps = {
	$showSidebar?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
	${({ theme, $showSidebar = true }) => css`
		background: ${theme.colors.secondWhite};

    ${!$showSidebar && css`
      ${ChildrenWrapper} {
        width: 100%;
      }
    `}
	`}
`;

export const ContentWrapper = styled.div`
	display: flex;

	${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const ChildrenWrapper = styled.div`
	${({ theme }) => css`
	background: ${theme.colors.white};
	width: calc(100% - 24.2rem);

    ${media.lessThan('large')`
      width: 100%;
    `}
	`}
`;
