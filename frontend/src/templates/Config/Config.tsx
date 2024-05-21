'use client';
import { AcademicRecordItem } from 'components/AcademicRecordItem/AcademicRecordItem';
import { CompetenceItem } from 'components/CompetenceItem/CompetenceItem';
import { ModalAddAcademicRecord } from 'components/Modals/ModalAddAcademicRecord/ModalAddAcademicRecord';
import { ModalAddCompetence } from 'components/Modals/ModalAddCompetence/ModalAddCompetence';
import { ProfessionalExperienceItem } from 'components/ProfessionalExperienceItem/ProfessionalExperienceItem';
import { Title } from 'components/Title/Title';
import { GetUserResponse, UserProps } from 'protocols/external/user/user';
import { Children } from 'react';
import { Base } from 'templates/Base/Base';

import { useQuery } from '@tanstack/react-query';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { AccountConfig } from 'components/AccountConfig/AccountConfig';
import { ModalAddProfessionalExperience } from 'components/Modals/ModalAddProfessionalExperience/ModalAddProfessionalExperience';
import { ResumeCard } from 'components/ResumeCard/ResumeCard';
import { useUser } from 'hooks/useUser/useUser';
import { GetUserRouteConst } from 'utils/routes';
import { ModalRemoveProfessionalExperience } from 'components/ModalRemoveProfessionalExperience/ModalRemoveProfessionalExperience';
import { RemoveProfessionalExperienceProvider } from 'hooks/contexts/RemoveProfessionalExperience/RemoveProfessionalExperience';
import { RemoveAcademicRecordProvider } from 'hooks/contexts/RemoveAcademicRecord/RemoveAcademicRecord';
import { ModalRemoveAcademicRecord } from 'components/ModalRemoveAcademicRecord/ModalRemoveAcademicRecord';

export type ConfigProps = {} & UserProps;

export const Config = ({
	id,
	name,
	email,
	phone,
	competences,
	profile_picture_path,
	about_me,
	academic_records,
	professional_experiences,
}: ConfigProps) => {
	const { findUser } = useUser();

	const initialData: AxiosResponse<GetUserResponse> = {
		data: {
			data: {
				id,
				name,
				email,
				phone,
				type: 'employee',
				about_me,
				profile_picture_path,
				competences: competences || [],
				academic_records: academic_records || [],
				professional_experiences: professional_experiences || [],
			},
		},
		config: {} as InternalAxiosRequestConfig,
		statusText: 'ok',
		headers: {},
		status: 200,
		request: {},
	};

	const { data: getUserReponse, isLoading } = useQuery({
		queryKey: [
			`/${GetUserRouteConst({
				user_id: id,
			})}`,
		],
		queryFn: () =>
			findUser({
				user_id: id,
				includes: ['competences', 'academicRecords', 'professionalExperiences'],
			}),
		initialData,
	});

	if (isLoading) {
		// Eduardo / Ana
		return (
			<Base>
				<p>Loading</p>
			</Base>
		);
	}

	const user = getUserReponse.data.data;

	return (
		<Base>
			<AccountConfig
				about_me={user.about_me}
				name={user.name}
				email={user.email}
				phone={user.phone}
			/>
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

				<ResumeCard
					text="Competências"
					addModal={<ModalAddCompetence user_id={user.id} />}
				>
					{Children.toArray(
						user.competences?.map(({ name }) => <CompetenceItem name={name} />),
					)}
				</ResumeCard>
			</>
		</Base>
	);
};
