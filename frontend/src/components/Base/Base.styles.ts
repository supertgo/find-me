import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  background: #f8f8fd;
`;

export const ContentWrapper = styled.div`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const ChildrenWrapper = styled.div`
  width: calc(100% - 27.2rem);
  background: #fff;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;
