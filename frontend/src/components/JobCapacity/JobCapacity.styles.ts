import styled, { css } from 'styled-components';

export const JobMaxInfo = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;
		gap: ${theme.space.xxxsmall};
		margin-top: ${theme.space.xxsmall};
		text-wrap: nowrap;

		p {
			font-size: ${theme.font.sizes.xs};
		}
	`}
`;

export const ProgressWrapper = styled.div`
	${({ theme }) => css`
		background: #d6ddeb;
		height: 0.6rem;
		margin-top: ${theme.space.small};
	`}
`;

type ProgressDivProps = {
	$progress: number;
};

export const ProgressDiv = styled.div<ProgressDivProps>`
	${({ theme, $progress }) => css`
		background: ${theme.colors.lightGreen};
		height: 0.6rem;
		width: ${`${$progress}%`};
	`}
`;
