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
  width: calc(100% - 27.2rem);
  background: ${theme.colors.white};

  ${media.lessThan('large')`
    width: 100%;
  `}
`;
