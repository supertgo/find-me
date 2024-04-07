import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: self-end;
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
