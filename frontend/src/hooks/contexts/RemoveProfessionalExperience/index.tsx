import { useContextSelector } from 'use-context-selector';
import {
	RemoveProfessionalExperienceContext,
	RemoveProfessionalExperienceProvider,
} from './RemoveProfessionalExperience';

const useRemoveProfessionalExperience = () => {
	const { setOpen, open, professionalExperience, setProfessionalExperience } =
		useContextSelector(RemoveProfessionalExperienceContext, (context) => ({
			open: context.open,
			setOpen: context.setOpen,
			professionalExperience: context.professionalExperience,
			setProfessionalExperience: context.setProfessionalExperience,
		}));

	return { setOpen, open, professionalExperience, setProfessionalExperience };
};

export {
	RemoveProfessionalExperienceProvider,
	RemoveProfessionalExperienceContext,
  useRemoveProfessionalExperience
};
