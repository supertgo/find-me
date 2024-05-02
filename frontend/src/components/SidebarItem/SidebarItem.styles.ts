import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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

    ${media.lessThan('medium')`
      display: flex;    
      flex-direction: column;
      align-items: center;
    `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.oficialGrey};
    font-size: ${theme.font.sizes.sm};
  `}
`;
