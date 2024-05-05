import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    padding: ${theme.space.medium};
    gap: ${theme.space.medium};

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
  `}
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const RightContent = styled.div``;

export const Title = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weights.medium};
    color: ${theme.colors.darkBlue};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weights.regular};
    color: #515b6f;
    margin-top: ${theme.space.xxsmall};
  `}
`;
