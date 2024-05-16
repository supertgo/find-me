import { ProfessionalExperience } from 'protocols/external/professional-experience/professional-experience';
import * as S from './ProfessionalExperienceItem.styles';

export type ProfessionalExperienceItemProps = {} & Omit<
	ProfessionalExperience,
	'updated_at' | 'created_at'
>;

export const ProfessionalExperienceItem = ({
	description,
	end_date,
	start_date,
	location,
	position,
	is_current,
	company_name,
  employment_type,
}: ProfessionalExperienceItemProps) => {
	return (
		<S.Wrapper>
			<S.ProfessionalXPInfo>
				<S.ProfessionalXPInfoTitle>{position}</S.ProfessionalXPInfoTitle>
				<S.ProfessionalXPInfoSubtitle>{`${company_name}, ${employment_type}`}</S.ProfessionalXPInfoSubtitle>
				<S.ProfessionalXPAdditionalInfo>{location}</S.ProfessionalXPAdditionalInfo>
			</S.ProfessionalXPInfo>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
};
