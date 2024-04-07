import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const WelcomeMessage = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.lg};
    color: #25324b;
    padding: ${theme.space.large} ${theme.space.large} 0 ${theme.space.large};
  `}
`;

export const ApplicationsWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space.large};

    a {
      padding-top: ${theme.space.medium};
    }
  `}
`;

export const MoreApplicationsWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding-top: ${theme.space.medium};
  `}
`;

export const MoreApplicationsLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: #2563eb;
    text-decoration: none;
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.sm};
  `}
`;
