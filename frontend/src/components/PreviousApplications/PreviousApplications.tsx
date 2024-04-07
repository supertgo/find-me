import { ReactNode } from 'react';
import * as S from './PreviousApplications.styles';

export type PreviousApplicationsProps = {
  title: string;
  children: ReactNode;
};

export const PreviousApplications = ({
  title,
  children,
}: PreviousApplicationsProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Applications>{children}</S.Applications>
    </S.Wrapper>
  );
};
