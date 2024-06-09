import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const WelcomeMessage = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.darkBlue};
    padding: ${theme.space.large} ${theme.space.large} 0 ${theme.space.large};
  `}
`;

export const PreviousJobs = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.space.large};
    padding: ${theme.space.small};

    h3 {
      margin-bottom: ${theme.space.medium};
    }
  `}
`
