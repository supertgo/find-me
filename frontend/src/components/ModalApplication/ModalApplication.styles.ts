import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		& > *:not(:first-child), button {
			margin-top: ${theme.space.large};
		}

    textarea {
      min-height: 15rem;
    }
	`}
`;
