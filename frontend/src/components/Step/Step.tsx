import { ReactNode } from 'react';
import * as S from './Step.styles';

export type StepProps = {
	IconWrapper(IconWrapper: any): HTMLElement;
	icon: ReactNode;
	itemStep: number;
	title: string;
	currentStep: number;
	maxStep: number;
	isActive: boolean;
	onClick: () => void;
};

export const Step = ({
	icon,
	itemStep,
	title,
	currentStep,
	maxStep,
	onClick,
}: StepProps) => {
	const isActive = currentStep >= itemStep;
	return (
		<S.Wrapper onClick={onClick}>
			<S.IconWrapper data-testid="icon-wrapper" isActive={isActive}>
				{icon}
			</S.IconWrapper>
			<S.TextWrapper>
				<S.StepInfo>{`Passo ${itemStep} / ${maxStep}`}</S.StepInfo>
				<S.Title>{title}</S.Title>
			</S.TextWrapper>
		</S.Wrapper>
	);
};
