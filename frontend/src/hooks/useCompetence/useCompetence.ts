import { PostAddCompetenceBody } from 'protocols/external/competence/competence';
import { toast } from 'react-toastify';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import { PostUserCompetenceRouteConst } from 'utils/routes';

export type CreateCompetenceProps = {
	competence: string;
};

export const useCompetence = () => {
	const createCompetence = async ({ competence }: CreateCompetenceProps) => {
		const postClient = new PostClient();

		const body: PostAddCompetenceBody = {
			competences: [
				{
					name: competence,
				},
			],
		};

		try {
			await postClient.post({
				url: `/${PostUserCompetenceRouteConst}`,
				body,
			});

			toast.success('Competência criada com sucesso!');
		} catch (e) {
			toast.error(UNEXPECTED_ERROR);
		}
	};
	return {
		createCompetence,
	};
};
