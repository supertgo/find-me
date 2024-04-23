import { ReactNode } from 'react';
import * as S from './ConfigInfoWrapper.styles';

export type ConfigInfoWrapperProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export const ConfigInfoWrapper = ({
  title,
  description,
  children,
}: ConfigInfoWrapperProps) => {
  return (
    <S.Wrapper>
      <S.LeftContent>
        <S.Title>{title}</S.Title>
        {!!description && <S.Description>{description}</S.Description>}
      </S.LeftContent>
      <S.RightContent>{children}</S.RightContent>
    </S.Wrapper>
  );
};
