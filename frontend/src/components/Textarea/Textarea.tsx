import { TextareaHTMLAttributes } from 'react';
import * as S from './Textarea.styles';

export type TextareaProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ maxLength, ...props }: TextareaProps) => {
  return (
    <S.Wrapper>
      <S.Textarea {...props} />
      {!!maxLength && (
        <S.LengthInformation>
          <p>{`Máximo: ${maxLength} caracteres`}</p>
          <p>{`0/${maxLength}`}</p>
        </S.LengthInformation>
      )}
    </S.Wrapper>
  );
};
