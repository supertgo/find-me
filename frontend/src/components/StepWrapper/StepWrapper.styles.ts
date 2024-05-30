import styled, { css } from 'styled-components';

export const StepWrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		gap: ${theme.space.xxxlarge};
		border: 1px solid #d6ddeb;
		padding: ${theme.space.small};
	`}
`;
