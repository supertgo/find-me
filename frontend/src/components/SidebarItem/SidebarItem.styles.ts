import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: self-end;
    text-decoration: none;
    padding: ${theme.space.xsmall} ${theme.space.small};

    svg {
      margin-right: ${theme.space.small};
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: #7c8493;
    font-size: ${theme.font.sizes.sm};
  `}
`;
