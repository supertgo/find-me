import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space.xxl} ${theme.space.large};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.xl};
  `}
`;

export const Hr = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.borderWidth.hairline};
    background: #d6ddeb;
  `}
`;
