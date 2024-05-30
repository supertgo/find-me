/* eslint-disable react/display-name */
import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import * as S from './Textarea.styles';
import { FieldError } from 'react-hook-form';
import { MessageError } from 'components/MessageError';
import { Label } from 'components/Label';

export type TextareaProps = {
	label?: string;
	error?: FieldError;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef(
	(
		{ maxLength, error, label, id, ...props }: TextareaProps,
		ref?: ForwardedRef<HTMLTextAreaElement>,
	) => {
		return (
			<S.Wrapper>
				{!!label && (
					<Label htmlFor={id} isRequired={props.required} labelText={label} />
				)}
				<S.Textarea ref={ref} id={id} {...props} />
				<S.LimitCharacter>
					{error && <MessageError error={error} />}
					{maxLength && <S.MaxLength>{`0/${maxLength}`}</S.MaxLength>}
				</S.LimitCharacter>
			</S.Wrapper>
		);
	},
);

export { Textarea };
