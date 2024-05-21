import { EmploymentType, WorkModel } from '../job/job';

export type ProfessionalExperience = {
	id: number;
	user_id: number;
	company_name: string;
	position: string;
	description: string;
	start_date: string;
	end_date: string | null;
	is_current: number;
	location: string;
	work_model: WorkModel;
	employment_type: EmploymentType;
	created_at: string;
	updated_at: string;
};

export type PostAddProfessionalExperienceObj = {
	is_current: boolean;
} & Omit<
	ProfessionalExperience,
	'created_at' | 'updated_at' | 'is_current' | 'id' | 'user_id'
>;

export type PostAddProfessionalExperiencesBody = {
	professional_experiences: PostAddProfessionalExperienceObj[];
};

export type DeleteProfessionalExperiencesBody = {
	professional_experiences_id: number[];
};

