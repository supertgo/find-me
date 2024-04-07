import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space.medium};
    border: ${theme.borderWidth.hairline} solid #d6ddeb;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.sizes.md};
    color: #25324b;
    margin-bottom: ${theme.space.large};
  `}
`;

export const Applications = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid #d6ddeb;
    padding-top: ${theme.space.medium};
  `}
`;
