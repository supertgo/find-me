import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: ${theme.space.small};
		gap: ${theme.space.small};
	`}
`;

export const SkillsWrapper = styled.div`
	${({ theme }) => css`
		display: grid;
		align-items: center;

		& > * {
			margin-right: ${theme.space.small};
		}
	`}
`;

