import { DeleteCompetenceBody, PostAddCompetenceBody } from 'protocols/external/competence/competence';
import { toast } from 'react-toastify';
import { DeleteClient } from 'services/httpClient/delete';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import { DeleteUserCompetenceRouteConst, PostUserCompetenceRouteConst } from 'utils/routes';

export type CreateCompetenceProps = {
	competence: string;
};

export type DeleteCompetenceProps = {
	id: number;
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
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.response.data.message);
				return { error: error.response.data.message };
			}

			toast.error(UNEXPECTED_ERROR);
			return { error: UNEXPECTED_ERROR };
		}
	};

	const deleteCompetence = async ({ id }: DeleteCompetenceProps) => {
		const deleteClient = new DeleteClient();

		const body: DeleteCompetenceBody = {
			competences_id: [id],
		};

		try {
			await deleteClient.delete({
				url: `/${DeleteUserCompetenceRouteConst}`,
				body,
			});

			toast.success('Competência removida com sucesso!');
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
		createCompetence,
    deleteCompetence
	};
};
