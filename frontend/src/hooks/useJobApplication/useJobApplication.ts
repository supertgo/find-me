import { PostJobApplicationBody } from 'protocols/external/job/application';
import { toast } from 'react-toastify';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import { PostJobApplicationRouteConst } from 'utils/routes';

export type UseJobApplicationProps = {};

export type CreateJobApplication = {
	job_id: number;
	cover_letter: string;
};

export const useJobApplication = () => {
	const createJobApplication = async ({
		job_id,
		cover_letter,
	}: CreateJobApplication) => {
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

	return {
		createJobApplication,
	};
};
