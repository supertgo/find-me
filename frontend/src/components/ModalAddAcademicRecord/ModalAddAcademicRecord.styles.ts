import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  	${({ theme }) => css`
    & > *:not(:first-child) {
      margin-top: ${theme.space.medium};
    }
`}
`

