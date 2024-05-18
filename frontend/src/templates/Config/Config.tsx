'use client';
import { Base } from 'templates/Base/Base';
import { Title } from 'components/Title/Title';
import { GetUserResponse, UserProps } from 'protocols/external/user/user';
import { Children } from 'react';
import { AcademicRecordItem } from 'components/AcademicRecordItem/AcademicRecordItem';
import { ProfessionalExperienceItem } from 'components/ProfessionalExperienceItem/ProfessionalExperienceItem';
import { ModalAddCompetence } from 'components/ModalAddCompetence/ModalAddCompetence';
import { ModalAddAcademicRecord } from 'components/ModalAddAcademicRecord/ModalAddAcademicRecord';
import { CompetenceItem } from 'components/CompetenceItem/CompetenceItem';

import { ResumeCard } from 'components/ResumeCard/ResumeCard';
import { AccountConfig } from 'components/AccountConfig/AccountConfig';
import { useQuery } from '@tanstack/react-query';
import { useUser } from 'hooks/useUser/useUser';
import { GetUserRouteConst } from 'utils/routes';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ModalAddProfessionalExperience } from 'components/ModalAddProfessionalExperience/ModalAddProfessionalExperience';

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
				<Title title="Informações" />
				<ResumeCard
					text="Experiência"
					modalTitle="Adicionar Competência"
					addModal={<ModalAddProfessionalExperience user_id={user.id} />}
				>
					{Children.toArray(
						user.professional_experiences?.map((professional_xp) => (
							<ProfessionalExperienceItem {...professional_xp} />
						)),
					)}
				</ResumeCard>
				<ResumeCard
					text="Formação Acadêmica"
					modalTitle="Adicionar Competência"
					addModal={<ModalAddAcademicRecord user_id={user.id} />}
				>
					{Children.toArray(
						user.academic_records?.map((academic_record) => (
							<AcademicRecordItem {...academic_record} />
						)),
					)}
				</ResumeCard>
				<ResumeCard
					text="Competências"
					modalTitle="Adicionar Competência"
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
