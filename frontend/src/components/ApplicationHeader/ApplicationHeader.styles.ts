import styled, { css } from 'styled-components'

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
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    align-items: center;

    img {
      object-fit: cover;
      margin-right: ${theme.space.xxsmall};
    }
  `}
`;

export const CompanyTextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    span {
      color: ${theme.colors.darkTitanium};
    }

    p {
      color: ${theme.colors.darkBlue};
      font-size: ${theme.font.sizes.md};
      font-weight: ${theme.font.weights.medium};
    }
  `}
`;


