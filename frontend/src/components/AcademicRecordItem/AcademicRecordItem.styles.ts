import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
    padding: ${theme.space.xsmall};
	`}
`;

export const AcademicInfo = styled.div`
		display: flex;
		flex-direction: column;
`;

export const AcademicTopRow = styled.div`
		display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      cursor: pointer;
    }
`;

export const AcademicInfoTitle = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.md};
		font-weight: ${theme.font.weights.medium};
    margin: ${theme.space.xxxsmall} 0;
	`}
`;

export const AcademicInfoSubtitle = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.sm};
		font-weight: 500;
    margin: ${theme.space.xxxsmall} 0;
	`}
`;

export const AcademicInfoDate = styled.span`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.xmd};
    margin: ${theme.space.xxxsmall} 0;
	`}
`;

export const Description = styled.p`
	${({ theme }) => css`
		margin: ${theme.space.xxxsmall} 0;
		white-space: pre-wrap;
	`}
`;
