import { AxiosResponse } from 'axios';
import { JobsResponse, PostJobBody } from 'protocols/external/job/job';
import { toast } from 'react-toastify';
import { GetClient } from 'services/httpClient/get';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import { GetJobsRouteConst, PostJobRouteConst } from 'utils/routes';

export type CreateJobProps = {
	job: PostJobBody;
};

export const useJob = () => {
	const findJobs = async () => {
		const getClient = new GetClient();

		return await getClient.get<AxiosResponse<JobsResponse>>({
			url: `${GetJobsRouteConst}`,
		});
	};

	const createJob = async ({ job }: CreateJobProps) => {
		const postClient = new PostClient();

		const body: PostJobBody = {
			...job,
		};

		try {
			await postClient.post({
				url: `/${PostJobRouteConst}`,
				body,
			});

			toast.success('Vaga criada com sucesso!');
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
		findJobs,
		createJob,
	};
};
