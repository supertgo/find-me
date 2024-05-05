import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background: #f8f8fd;
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
  ${media.lessThan('large')`
    display: flex;    
    flex-direction: row;
    height: min-content;
    width: 100%;
    justify-content: space-around;
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    align-items: center;
    gap: ${theme.space.small};
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

    span {
      font-weight: ${theme.font.weights.regular};
      font-size: ${theme.font.sizes.xs};
      color: #515b6f;
    }
  `}
`;
