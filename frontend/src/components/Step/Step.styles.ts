import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: ${theme.borderRadius.full};
    background: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      g {
        stroke: white;
      }
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.xxxsmall};
  `}
`;

export const Title = styled.h5`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.sizes.smd};
    color: ${theme.colors.darkBlue};
  `}
`;

export const StepInfo = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.regular};
    font-size: ${theme.font.sizes.sm};
    color: #2563EB;
  `}
`
