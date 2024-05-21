import { ProfessionalExperience } from 'protocols/external/professional-experience/professional-experience';
import * as S from './ProfessionalExperienceItem.styles';
import { translateEmploymentType } from 'utils/job';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useContextSelector } from 'use-context-selector';
import { RemoveProfessionalExperienceContext } from 'hooks/contexts/RemoveProfessionalExperience/RemoveProfessionalExperience';

export type ProfessionalExperienceItemProps = {} & Omit<
	ProfessionalExperience,
	'updated_at' | 'created_at'
>;

export const ProfessionalExperienceItem = ({
	id,
	description,
	end_date,
	start_date,
	location,
	position,
	is_current,
	company_name,
	employment_type,
}: ProfessionalExperienceItemProps) => {
	const subtitle =
		`${company_name}` +
		`${employment_type !== null ? `, ${translateEmploymentType[employment_type]}` : ''}`;

	const { setOpen, setProfessionalExperience } = useContextSelector(
		RemoveProfessionalExperienceContext,
		(context) => ({
			setOpen: context.setOpen,
			setProfessionalExperience: context.setProfessionalExperience,
		}),
	);

	const removeProfessionalExperience = () => {
		setProfessionalExperience({
			id,
			name: position,
		});
		setOpen(true);
	};

	return (
		<S.Wrapper>
			<S.ProfessionalXPInfo>
				<S.ProfessionalXPTopRow>
					<S.ProfessionalXPInfoTitle>{position}</S.ProfessionalXPInfoTitle>
					<Cross1Icon onClick={removeProfessionalExperience} />
				</S.ProfessionalXPTopRow>
				<S.ProfessionalXPInfoSubtitle>{subtitle}</S.ProfessionalXPInfoSubtitle>
				<S.ProfessionalXPAdditionalInfo>
					{location}
				</S.ProfessionalXPAdditionalInfo>
			</S.ProfessionalXPInfo>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
};
