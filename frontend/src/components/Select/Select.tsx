import { Label } from 'components/Label';
import * as S from './Select.styles';

export type SelectProps = {
	options: { value: string; label: string }[];
	defaultValue?: string;
	register?: any;
	requiredMessage?: string;
	placeholder?: string;
	name: string;
	label?: string;
};

export const Select = ({
	options,
	defaultValue = '',
	register,
	requiredMessage,
	placeholder,
	name,
	label,
}: SelectProps) => {
	return (
		<S.Wrapper>
			{!!label && <Label labelText={label} />}
			<select
				defaultValue={defaultValue}
				{...(register && register(name, { required: requiredMessage }))}
			>
				{placeholder && (
					<S.Option value="" disabled>
						{placeholder}
					</S.Option>
				)}
				{options.map((option) => (
					<S.Option key={option.value} value={option.value}>
						{option.label}
					</S.Option>
				))}
			</select>
		</S.Wrapper>
	);
};
