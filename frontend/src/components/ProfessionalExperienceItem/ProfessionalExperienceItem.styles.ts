import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
    padding: ${theme.space.xsmall};
	`}
`;

export const ProfessionalXPInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProfessionalXPInfoTitle = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.md};
		font-weight: ${theme.font.weights.medium};
	`}
`;

export const ProfessionalXPInfoSubtitle = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.sm};
		font-weight: 500;
	`}
`;

export const ProfessionalXPAdditionalInfo = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xmd};
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		margin: ${theme.space.xxxsmall} 0;
		white-space: pre-wrap;
	`}
`;
