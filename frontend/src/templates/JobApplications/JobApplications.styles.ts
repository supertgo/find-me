import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.space.medium};
    margin-bottom: ${theme.space.xxlarge};
  `}
`;

