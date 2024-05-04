import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.space.medium};
    margin-bottom: ${theme.space.xxlarge};
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
