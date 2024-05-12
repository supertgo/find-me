import styled, { css } from 'styled-components'

export const TableTopContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.space.large} 0;
    align-items: center;

    h3 {
      color: ${theme.colors.darkBlue};
      font-size: ${theme.font.sizes.lg};
      font-weight: ${theme.font.weights.bold};
    }
  `}
`;

export const PaginationWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.space.medium};

    & button:not(:last-child) {
      margin-right: ${theme.space.xxxsmall};
    }
  `}
`;



