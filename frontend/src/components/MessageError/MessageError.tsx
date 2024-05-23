import { FieldError } from 'react-hook-form';
import * as S from './MessageError.styles';

export type MessageErrorProps = {
	error: FieldError;
};

export const MessageError = ({ error }: MessageErrorProps) => {
	return <S.Wrapper>{error.message}</S.Wrapper>;
};
