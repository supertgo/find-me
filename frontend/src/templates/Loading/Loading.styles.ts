import styled, { keyframes, css } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg); };
  to { transform: rotate(360deg); };
`;

export const LoadingTemplate = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 100vh;
    width: 100vw;
    min-width: 100vw;
    background-color: ${theme.colors.white};
  `}
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid ${theme.colors.primary};
    border-right: 2px solid ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
    border-left: 4px solid ${theme.colors.primary};
    background: transparent;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
  `}
`;
