import * as S from './Title.styles';

export type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
      <S.Hr />
    </>
  );
};
