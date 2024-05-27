import { AxiosResponse } from 'axios';
import { PostJobApplicationBody } from 'protocols/external/job/application';
import { JobApplicationResponse } from 'protocols/external/job/job-application';
import { toast } from 'react-toastify';
import { GetClient } from 'services/httpClient/get';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import {
	GetJobApplicationsRouteConst,
	GetJobApplicationsRouteConstProps,
	PostJobApplicationRouteConst,
} from 'utils/routes';

export type UseJobApplicationProps = {};

export type CreateJobApplicationProps = {
	job_id: number;
	cover_letter: string;
};

export type FindJobApplicationProps = GetJobApplicationsRouteConstProps;

export const useJobApplication = () => {
	const createJobApplication = async ({
		job_id,
		cover_letter,
	}: CreateJobApplicationProps) => {
		const postClient = new PostClient();

		const body: PostJobApplicationBody = {
			cover_letter,
		};

		try {
			await postClient.post({
				url: `/${PostJobApplicationRouteConst(job_id)}`,
				body,
			});

			toast.success('Candidatura registrada com sucesso!');
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.response.data.message);
				return { error: error.response.data.message };
			}

			toast.error(UNEXPECTED_ERROR);
			return { error: UNEXPECTED_ERROR };
		}
	};

	const findJobApplications = async ({
		jobsId,
		candidatesId,
		includes,
	}: FindJobApplicationProps) => {
		const getClient = new GetClient();

		try {
			return await getClient.get<AxiosResponse<JobApplicationResponse>>({
				url: `/${GetJobApplicationsRouteConst({
					includes,
					candidatesId,
					jobsId,
				})}`,
			});

		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.response.data.message);
				return { error: error.response.data.message };
			}

			toast.error(UNEXPECTED_ERROR);
			return { error: UNEXPECTED_ERROR };
		}
	};

	return {
		createJobApplication,
		findJobApplications,
	};
};
