import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space.large};

    & > *:not(:first-child) {
      margin-top: ${theme.space.large};
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    gap: ${theme.space.large};
  `}
`;

export const LeftContent = styled.div`
  ${({ theme }) => css`
    border: ${theme.borderWidth.hairline} solid #d6ddeb;
    padding: ${theme.space.medium};
  `}
`;

export const RightContent = styled.div`
  ${({ theme }) => css`
    border: ${theme.borderWidth.hairline} solid #d6ddeb;
    padding: ${theme.space.medium};
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    border-bottom: ${theme.borderWidth.hairline} solid #d6ddeb;
    padding-bottom: ${theme.space.xxlarge};
    align-items: center;
    gap: ${theme.space.xxsmall};

    img {
      object-fit: cover;
    }
  `}
`;

export const AvatarTextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    h5 {
      color: ${theme.colors.darkBlue};
      font-weight: ${theme.font.weights.bold};
      font-size: ${theme.font.sizes.lg};
      margin-bottom: ${theme.space.xxsmall};
    }

    p {
      font-size: ${theme.font.sizes.sm};
      color: ${theme.colors.officialGrey};
      text-wrap: nowrap;
    }
  `}
`;

//TODO virar componente Eduardo/Ana
export const Contact = styled.div`
  ${({ theme }) => css`
    h5 {
      color: ${theme.colors.darkBlue};
      font-weight: ${theme.font.weights.medium};
      font-size: ${theme.font.sizes.md};
      margin: ${theme.space.small} 0;
    }

    & div:not(:last-child) {
      margin-bottom: ${theme.space.small};
    }
  `}
`;

export const ContactItem = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    gap: ${theme.space.xxxsmall};

    svg {
      color: ${theme.colors.officialGrey};
    }
  `}
`;

export const ContactTextContainer = styled.div`
  ${({ theme }) => css`
    h6 {
      font-size: ${theme.font.sizes.sm};
      font-weight: 400;
      color: ${theme.colors.officialGrey};
      margin-bottom: ${theme.space.xxxsmall};
    }

    p {
      color: ${theme.colors.darkBlue};
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;

export const PersonalInformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PersonalInformationTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-size: ${theme.font.sizes.smd};
    margin-bottom: ${theme.space.small};
  `}
`;

export const PersonalInformationItem = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.medium};
  `}
`;

// export const PersonalInformationItemContent = styled.p`
//   ${({ theme }) => css``}
// `;

export const PersonalInformationItemTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.officialGrey};
    font-size: ${theme.font.sizes.sm};
    margin-bottom: ${theme.space.xxsmall};
  `}
`;
export const PersonalInformationItemText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weights.medium};
    text-align: left;
    white-space: break-spaces;
  `}
`;
