import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.borderRadius.s} 1rem;
    border-radius: 8rem;
    background: #56cdad1a;
    color: #56cdad;
    font-size: ${theme.font.sizes.xs};
    font-weight: ${theme.font.weights.medium};
    width: min-content;
    text-wrap: nowrap;
  `}
`;
