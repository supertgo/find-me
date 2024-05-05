import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.space.medium};
    margin-bottom: ${theme.space.xxlarge};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.space.small};
    box-shadow: 0px -1px 0px 0px #d6ddeb inset;
  `}
`;

export const CompanyWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
`;

export const CompanyTextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    span {
      color: #515b6f;
    }

    p {
      color: ${theme.colors.darkBlue};
      font-size: ${theme.font.sizes.md};
      font-weight: ${theme.font.weights.medium};
    }
  `}
`;

export const TableTopContent = styled.div`
  ${({ theme }) => css``}
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
