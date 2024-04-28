import { ReactNode } from 'react';
import * as S from './Step.styles';

export type StepProps = {
  icon: ReactNode;
  itemStep: number;
  title: string;
  currentStep: number;
  maxStep: number;
  onClick: () => void
};

export const Step = ({
  icon,
  itemStep,
  title,
  currentStep,
  maxStep,
  onClick
}: StepProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.TextWrapper>
        <S.StepInfo>{`Passo ${currentStep} / ${maxStep}`}</S.StepInfo>
        <S.Title>{title}</S.Title>
      </S.TextWrapper>
    </S.Wrapper>
  );
};
