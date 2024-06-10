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

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: ${theme.space.small};

    & > * {
      margin: ${theme.space.small} 0;
    }
  `}
`;

export const ErrorHeading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weights.bold};
  `}
`;

export const ErrorHeadingThree = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weights.bold};
  `}
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
