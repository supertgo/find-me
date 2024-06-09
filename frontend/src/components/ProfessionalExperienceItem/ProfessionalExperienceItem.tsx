import { Cross1Icon } from '@radix-ui/react-icons';
import { useRemoveProfessionalExperience } from 'hooks/contexts/RemoveProfessionalExperience';
import { ProfessionalExperience } from 'protocols/external/professional-experience/professional-experience';
import { experienceDate } from 'utils/date';
import { translateEmploymentType } from 'utils/job';
import * as S from './ProfessionalExperienceItem.styles';

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

	const { setOpen, setProfessionalExperience } = useRemoveProfessionalExperience()

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
					<i title="Remover experiência" onClick={removeProfessionalExperience}>
						<Cross1Icon />
					</i>
				</S.ProfessionalXPTopRow>
				<S.ProfessionalXPInfoSubtitle>{subtitle}</S.ProfessionalXPInfoSubtitle>
				<S.ProfessionalXPAdditionalInfo>
					{location}
				</S.ProfessionalXPAdditionalInfo>
				<S.ProfessionalXPAdditionalInfo>
					{experienceDate({
						endDate: end_date,
						isCurrent: is_current,
						startDate: start_date,
					})}
				</S.ProfessionalXPAdditionalInfo>
			</S.ProfessionalXPInfo>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
};
