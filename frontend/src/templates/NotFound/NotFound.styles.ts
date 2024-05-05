import styled, { css } from 'styled-components';

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
