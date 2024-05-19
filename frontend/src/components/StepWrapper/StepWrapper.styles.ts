import styled, { css } from 'styled-components';

export const StepWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 ${theme.space.large};
		gap: ${theme.space.xxxlarge};
		border: 1px solid #d6ddeb;
		padding: ${theme.space.small};
	`}
`;
