import {
	DeleteProfessionalExperiencesBody,
	PostAddProfessionalExperienceObj,
	PostAddProfessionalExperiencesBody,
} from 'protocols/external/professional-experience/professional-experience';
import { toast } from 'react-toastify';
import { DeleteClient } from 'services/httpClient/delete';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import {
	DeleteUserAcademicRecordRouteConst,
	PostUserProfessionalExperiencesRouteConst,
} from 'utils/routes';

export type UseProfessionalExperienceProps = {};

export type CreateProfessionalExperienceProps = {
	professionalExperience: PostAddProfessionalExperienceObj;
};

export type DeleteProfessionalExperienceProps = {
	id: number;
};

export const useProfessionalExperience = () => {
	const createProfessionalExperience = async ({
		professionalExperience,
	}: CreateProfessionalExperienceProps) => {
		const postClient = new PostClient();

		const body: PostAddProfessionalExperiencesBody = {
			professional_experiences: [
				{
					...professionalExperience,
				},
			],
		};

		try {
			await postClient.post({
				url: `/${PostUserProfessionalExperiencesRouteConst}`,
				body,
			});

			toast.success('Experiência criada com sucesso!');
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.response.data.message);
				return { error: error.response.data.message };
			}

			toast.error(UNEXPECTED_ERROR);
			return { error: UNEXPECTED_ERROR };
		}
	};

	const deleteProfessionalExperience = async ({
		id,
	}: DeleteProfessionalExperienceProps) => {
		const deleteClient = new DeleteClient();

		const body: DeleteProfessionalExperiencesBody = {
			professional_experiences_id: [id],
		};

		try {
			await deleteClient.delete({
				url: `/${DeleteUserAcademicRecordRouteConst}`,
				body,
			});

			toast.success('Experiência removida com sucesso!');
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
		createProfessionalExperience,
		deleteProfessionalExperience,
	};
};
