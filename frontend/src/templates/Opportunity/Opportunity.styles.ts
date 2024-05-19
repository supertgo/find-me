import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  textarea {
    height: 15.2rem;
  }
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space.small} ${theme.space.large};
    box-shadow: 0px -1px 0px 0px #d6ddeb inset;
  `}
`;


export const VerticalRow = styled.div`
  background: #d6ddeb;
  width: 0.1rem;
  height: 4rem;
`;

export const Form = styled.div`
  ${({ theme }) => css`
    & > * {
      border: 1px solid #D6DDEB;
    }
  `}
`

export const ContractTypeWrapper = styled.div`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.space.xmedium};
    }
  `}
`

export const BottomRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: ${theme.space.medium};
    gap: ${theme.space.xxxsmall};
  `}
`;
