import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		& > *:not(:first-child) {
			margin-top: ${theme.space.medium};
		}
	`}
`;

export const SelectWrapper = styled.div`
	${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.space.small};

      select {
        width: 100%;
      }
	`}
`
