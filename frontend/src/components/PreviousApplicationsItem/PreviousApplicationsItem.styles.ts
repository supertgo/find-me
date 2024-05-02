import styled, { css } from 'styled-components';
import { PreviousApplicationsItemProps } from './PreviousApplicationsItem';

export type WrapperProps = {
  $white?: PreviousApplicationsItemProps['white'];
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $white = false }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: ${theme.borderRadius.sm};
    background: ${$white ? '#fff' : '#f8f8fd'};
    padding: ${theme.space.medium};
    justify-content: space-between;
  `}
`;

export const JobWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    grid-template-columns: 0.3fr 1fr;

    div {
      ${JobTitle} {
        margin-bottom: ${theme.space.xxsmall};
      }
    }
  `}
`;

export const JobTitle = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weights.bold};
    font-size: ${theme.font.sizes.smd};
    color: ${theme.colors.darkBlue};
  `}
`;

export const JobInfo = styled.p`
  ${({ theme }) => css``}
`;

export const DateInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: ${theme.font.sizes.sm};
      margin-bottom: ${theme.space.xxsmall};
      color: ${theme.colors.darkBlue};
      font-weight: 500;
    }

    span {
      color: ${theme.colors.oficialGrey};
    }
  `}
`;

export const Status = styled.div``;
