/* eslint-disable react/display-name */
import {
	ForwardedRef,
	TextareaHTMLAttributes,
	forwardRef,
	useState,
} from 'react';
import * as S from './Textarea.styles';
import { FieldError } from 'react-hook-form';
import { MessageError } from 'components/MessageError';
import { Label } from 'components/Label';
import { MaxLengths } from 'utils/maxLengths';

export type TextareaProps = {
	label?: string;
	error?: FieldError;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef(
	(
		{ maxLength, error, label, id, ...props }: TextareaProps,
		ref?: ForwardedRef<HTMLTextAreaElement>,
	) => {
		const [charCount, setCharCount] = useState(0);

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setCharCount(e.target.value.length);
			if (props.onChange) {
				props.onChange(e);
			}
		};

		return (
			<S.Wrapper>
				{!!label && (
					<Label htmlFor={id} isRequired={props.required} labelText={label} />
				)}
				<S.Textarea
					ref={ref}
					id={id}
					{...props}
					maxLength={MaxLengths.description}
					onChange={handleChange}
				/>
				<S.LimitCharacter>
					{error && <MessageError error={error} />}
					<S.MaxLength>{`${charCount}/${MaxLengths.description}`}</S.MaxLength>
				</S.LimitCharacter>
			</S.Wrapper>
		);
	},
);

export { Textarea };
