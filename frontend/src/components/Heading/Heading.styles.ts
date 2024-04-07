import styled, { css } from 'styled-components';

export const Wrapper = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.lg};
    color: #0F172A;
  `}
`;
