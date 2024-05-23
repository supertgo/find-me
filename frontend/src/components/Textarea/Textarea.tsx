/* eslint-disable react/display-name */
import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import * as S from './Textarea.styles';
import { FieldError } from 'react-hook-form';
import { MessageError } from 'components/MessageError/MessageError';

export type TextareaProps = {
	error?: FieldError;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef(
	(
		{ maxLength, error, ...props }: TextareaProps,
		ref?: ForwardedRef<HTMLTextAreaElement>,
	) => {
		return (
			<S.Wrapper>
				<S.Textarea ref={ref} {...props} />
				<S.LimitCharacter>
					{error && <MessageError error={error} />}
					{maxLength && <S.MaxLength>{`0/${maxLength}`}</S.MaxLength>}
				</S.LimitCharacter>
			</S.Wrapper>
		);
	},
);

export { Textarea };
