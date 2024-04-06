import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid #e2e8f0;
    border-radius: 1.2rem;
    height: 5rem;
    padding: ${theme.space.xxsmall} ${theme.space.small};
  `}
`;
