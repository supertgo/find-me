import { Cross1Icon } from '@radix-ui/react-icons';
import { RemoveCompetenceContext } from 'hooks/contexts/RemoveCompetence/RemoveCompetence';
import { useContextSelector } from 'use-context-selector';
import * as S from './CompetenceItem.styles';

export type CompetenceItemProps = {
	id: number;
	name: string;
};

export const CompetenceItem = ({ name, id }: CompetenceItemProps) => {
	const { setOpen, setCompetence } = useContextSelector(
		RemoveCompetenceContext,
		(context) => ({
			setOpen: context.setOpen,
			setCompetence: context.setCompetence,
		}),
	);

	const removeCompetence = () => {
		setCompetence({
			id,
			name,
		});
		setOpen(true);
	};

	return (
		<S.Wrapper>
			<span>{name}</span>
      <i title="Remover Competência" onClick={removeCompetence}>
        <Cross1Icon />
      </i>
		</S.Wrapper>
	);
};
