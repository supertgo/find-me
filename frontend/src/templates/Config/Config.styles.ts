import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.space.medium};
  `}
`;

export const PersonalDetails = styled.div`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin: ${theme.space.medium} 0;
    }
  `}
`;

export const AvatarCircle = styled.div`
  width: 12.4rem;
  height: 12.4rem;
  border-radius: 50%;
  background-color: gray;
`

export const PersonalDetailsGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.space.medium};

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
  `}
`;

export const ConfigEmailWrapper = styled.div`
  ${({ theme }) => css`
    & > *:not(:first-child) {
      margin: ${theme.space.xmedium} 0;
    }
  `}
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: end;
`;
