import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    color: ${theme.colors.white};

    ${media.lessThan('medium')`
      display: flex;
    `}
  `}
`;

export const LeftSide = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    padding: ${theme.space.xxl};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const LeftSideContent = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.primary};
    padding: ${theme.space.xxl};

    ${media.lessThan('medium')`
      display: none;
    `}

    ${media.greaterThan('huge')`
      height: 50vh;
    `}
  `}
`;

export const Description = styled.div``;

export const Copy = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.sizes.lg};
  `}
`;

export const BottomText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xs};
    color: #f8fafc;
    text-align: center;
    font-weight: 300;
  `}
`;

export const LogoText = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: 2.7rem;
    color: ${theme.colors.white};
    align-self: start;
  `}
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.space.xxl};
    color: ${theme.colors.grey900};

    div {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: ${theme.space.xlarge};
    }

    & > input {
      margin-bottom: ${theme.space.small};
    }
  `}
`;

export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ForgotPasswordLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.xs};
    text-align: right;
    margin-bottom: ${theme.space.large};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: #0f172a;
    font-weight: ${theme.font.weights.regular};
    font-size: ${theme.font.sizes.xs};
    margin-top: ${theme.space.xxxlarge};
    text-align: center;
  `}
`;
