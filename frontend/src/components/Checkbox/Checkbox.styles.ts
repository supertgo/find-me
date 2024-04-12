import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    color: #64748B;
    font-size: ${theme.font.sizes.xxs};
    display: flex;
    align-items: self-end;
  `}
`;

export const Checkbox = styled.input`
  ${({ theme }) => css`
    border: ${theme.borderWidth.hairline} solid #e2e8f0;
    width: 2rem;
    height: 2rem;
    margin-right: ${theme.space.xsmall};
  `}
`;
