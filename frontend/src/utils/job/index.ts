import {
	EmploymentType,
	JobCompetence,
	SalaryTimeUnit,
	WorkModel,
} from 'protocols/external/job/job';
import { JobStatus } from 'protocols/external/job/job-application';

export const translateSalaryTimeUnit: Record<SalaryTimeUnit, string> = {
	day: 'dia',
	hour: 'hora',
	week: 'semana',
	month: 'mês',
};

export const translateEmploymentType: Record<EmploymentType, string> = {
	'full-time': 'Tempo integral',
	'part-time': 'Meio Período',
};

export const translateWorkModel: Record<WorkModel, string> = {
	onSite: 'Presencial',
	hybrid: 'Híbrido',
	homeOffice: 'Home Office',
};

export const translateJobApplicationStatus: Record<JobStatus, string> = {
	hired: 'Contratado',
	pending: 'Pendente',
	approved: 'Aprovado',
	canceled: 'Cancelado',
	rejected: 'Rejeitado',
	in_progress: 'Em progresso',
};

export const filterJobLocation = (location: string) => {
	if (location.indexOf('\n') === -1) return location;

	const splittedData = location.split('\n');

	return splittedData[1].length > 1 ? splittedData[1] : splittedData[0];
};

export const parseSkillsIntoCompetences = (
	skills: string[],
): JobCompetence[] => {
	return skills.map((skill) => ({
		name: skill,
		description: `Experiência em ${skill}`,
		type: 'other',
	})) as JobCompetence[];
};
