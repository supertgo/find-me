import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-right: 2rem;
    & > div:not(:first-child) {
      margin-top: ${theme.space.xxl};
    }

    ${media.lessThan('medium')`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.space.xsmall};
      padding-right: 0;

      & > div:not(:first-child) {
        margin-top: 0;
      }
    `}
  `}
`;

export const FilterWrapper = styled.div`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin: 2rem 0;
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    text-wrap: nowrap;
    font-size: ${theme.font.sizes.sm};
    font-weight: ${theme.font.weights.medium};
  `}
`;
