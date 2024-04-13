import * as S from './Pill.styles';

export type PillProps = {
  text: string;
};

export const Pill = ({ text }: PillProps) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};
