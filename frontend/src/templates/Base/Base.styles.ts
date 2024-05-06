import styled from 'styled-components';
import media from 'styled-media-query';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  background: ${theme.colors.secondWhite};
`;

export const ContentWrapper = styled.div`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const ChildrenWrapper = styled.div`
  background: ${theme.colors.white};
  width: calc(100% - 24.2rem);

  ${media.lessThan('large')`
    width: 100%;
  `}
`;
