import { useContextSelector } from 'use-context-selector';
import {
	RemoveCompetenceContext,
	RemoveCompetenceProvider,
} from './RemoveCompetence';

const useRemoveCompetence = () => {
	const { setOpen, open, competence, setCompetence } = useContextSelector(
		RemoveCompetenceContext,
		(context) => ({
			open: context.open,
			setOpen: context.setOpen,
			competence: context.competence,
			setCompetence: context.setCompetence,
		}),
	);

	return { setOpen, open, competence, setCompetence };
};

export { RemoveCompetenceProvider, RemoveCompetenceContext, useRemoveCompetence };
