'use client';
import { AcademicRecordItem } from 'components/AcademicRecordItem';
import { AccountConfig } from 'components/AccountConfig';
import { CompetenceItem } from 'components/CompetenceItem';
import { ModalRemoveAcademicRecord } from 'components/ModalRemoveAcademicRecord';
import { ModalRemoveCompetence } from 'components/ModalRemoveCompetence';
import { ModalRemoveProfessionalExperience } from 'components/ModalRemoveProfessionalExperience';
import { ModalAddAcademicRecord } from 'components/Modals/ModalAddAcademicRecord';
import { ModalAddCompetence } from 'components/Modals/ModalAddCompetence';
import { ModalAddProfessionalExperience } from 'components/Modals/ModalAddProfessionalExperience';
import { ProfessionalExperienceItem } from 'components/ProfessionalExperienceItem';
import { ResumeCard } from 'components/ResumeCard';
import { Title } from 'components/Title';
import { RemoveAcademicRecordProvider } from 'hooks/contexts/RemoveAcademicRecord/RemoveAcademicRecord';
import { RemoveCompetenceProvider } from 'hooks/contexts/RemoveCompetence/RemoveCompetence';
import { RemoveProfessionalExperienceProvider } from 'hooks/contexts/RemoveProfessionalExperience/RemoveProfessionalExperience';
import { UserEnum, UserProps } from 'protocols/external/user/user';
import { Children } from 'react';
import { Base } from 'templates/Base/Base';
import { useConfig, LoadingConfig } from '.';

export type ConfigProps = {} & UserProps;

export const Config = (props: ConfigProps) => {
	const { getUserResponse, isLoading } = useConfig(props);

	if (isLoading) {
		return <LoadingConfig />;
	}

	const user = getUserResponse.data.data;

	return (
		<Base>
			<AccountConfig
				about_me={user.about_me}
				name={user.name}
				email={user.email}
				phone={user.phone}
			/>
			{user.type === UserEnum.EMPLOYEE && (
				<>
					<RemoveProfessionalExperienceProvider>
						<ModalRemoveProfessionalExperience />
						<Title title="Informações" />
						<ResumeCard
							text="Experiência"
							addModal={<ModalAddProfessionalExperience user_id={user.id} />}
						>
							{Children.toArray(
								user.professional_experiences?.map((professional_xp) => (
									<ProfessionalExperienceItem {...professional_xp} />
								)),
							)}
						</ResumeCard>
					</RemoveProfessionalExperienceProvider>

					<RemoveAcademicRecordProvider>
						<ModalRemoveAcademicRecord />
						<ResumeCard
							text="Formação Acadêmica"
							addModal={<ModalAddAcademicRecord user_id={user.id} />}
						>
							{Children.toArray(
								user.academic_records?.map((academic_record) => (
									<AcademicRecordItem {...academic_record} />
								)),
							)}
						</ResumeCard>
					</RemoveAcademicRecordProvider>

					<RemoveCompetenceProvider>
						<ModalRemoveCompetence />
						<ResumeCard
							text="Competências"
							addModal={<ModalAddCompetence user_id={user.id} />}
						>
							{Children.toArray(
								user.competences?.map(({ name, id }) => (
									<CompetenceItem id={id} name={name} />
								)),
							)}
						</ResumeCard>
					</RemoveCompetenceProvider>
				</>
			)}
		</Base>
	);
};
