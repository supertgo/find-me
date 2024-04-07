import { Container } from 'components/Container/Container';
import * as S from './Base.styles';
import { ReactNode } from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';

export type BaseProps = {
  children: ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.ContentWrapper>
          <Sidebar />
          <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
        </S.ContentWrapper>
      </Container>
    </S.Wrapper>
  );
};
