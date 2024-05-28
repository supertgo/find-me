import * as S from './Select.styles';

export type SelectProps = {
	options: { value: string; label: string }[];
	defaultValue?: string;
	register?: any;
	requiredMessage?: string;
	placeholder?: string;
	name: string;
};

export const Select = ({
	options,
	defaultValue = '',
	register,
	requiredMessage,
	placeholder,
	name,
}: SelectProps) => {
	return (
		<S.Wrapper>
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
