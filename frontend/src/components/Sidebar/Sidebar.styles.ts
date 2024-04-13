import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background: #f8f8fd;
    width: 24.2rem;
    padding: ${theme.space.large} 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    ${media.lessThan('large')`
      display: flex;    
      flex-direction: row;
      height: min-content;
      align-items: center;
      width: 100%;
      padding: ${theme.space.small} 0;
    `}
  `}
`;

export const Items = styled.div`
  ${media.lessThan('large')`
    display: flex;    
    flex-direction: row;
    height: min-content;
    width: 100%;
    justify-content: space-around;
  `}
`;

export const Avatar = styled.div``;
