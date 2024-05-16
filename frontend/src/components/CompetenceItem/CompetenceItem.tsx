import * as S from './CompetenceItem.styles';

export type CompetenceItemProps = {
	name: string;
};

export const CompetenceItem = ({ name }: CompetenceItemProps) => {
	return (
		<S.Wrapper>
			<span>{name}</span>
		</S.Wrapper>
	);
};
