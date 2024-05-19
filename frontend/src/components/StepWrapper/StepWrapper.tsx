import { ReactNode } from 'react';
import * as S from './StepWrapper.styles';

export type StepWrapperProps = {
	children: ReactNode;
};

export const StepWrapper = ({ children }: StepWrapperProps) => {
	return <S.StepWrapper>{children}</S.StepWrapper>;
};
