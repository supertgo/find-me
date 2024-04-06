import * as S from './Heading.styles';

export type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3';
  text: string;
};

export const Heading = ({ text }: HeadingProps) => {
  return <S.Wrapper>{text}</S.Wrapper>;
};
