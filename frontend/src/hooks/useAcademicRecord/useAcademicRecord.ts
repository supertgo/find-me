import {
	PostAcademicRecordsBody,
	PostAcademicRecordObj,
	DeleteAcademicRecordBody,
} from 'protocols/external/academic-record/academic-record';
import { DeleteClient } from 'services/httpClient/delete';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import {
	DeleteUserAcademicRecordRouteConst,
	PostUserAcademicRecordRouteConst,
} from 'utils/routes';
import { Toast } from 'utils/toast';

export type CreateAcademicRecordProps = {
	academicRecord: PostAcademicRecordObj;
};

export type DeleteAcademicRecordProps = {
	id: number;
};

export const useAcademicRecord = () => {
	const createAcademicRecord = async ({
		academicRecord,
	}: CreateAcademicRecordProps) => {
		const postClient = new PostClient();

		const body: PostAcademicRecordsBody = {
			academic_records: [academicRecord],
		};

		try {
			await postClient.post({
				url: `/${PostUserAcademicRecordRouteConst}`,
				body,
			});

			Toast.success('Formação acadêmica criada com sucesso!');
		} catch (error) {
			if (error instanceof Error) {
				Toast.error(error.response.data.message);
				return { error: error.response.data.message };
			}
      
			Toast.error(UNEXPECTED_ERROR);
			return { error: UNEXPECTED_ERROR };
		}
	};

	const deleteAcademicRecord = async ({ id }: DeleteAcademicRecordProps) => {
		const deleteClient = new DeleteClient();

		const body: DeleteAcademicRecordBody = {
			academic_records_id: [id],
		};

		try {
			await deleteClient.delete({
				url: `/${DeleteUserAcademicRecordRouteConst}`,
				body,
			});

			Toast.success('Registro acadêmico removido com sucesso!');
		} catch (error) {
			if (error instanceof Error) {
				Toast.error(error.response.data.message);
				return { error: error.response.data.message };
			}

			Toast.error(UNEXPECTED_ERROR);
			return { error: UNEXPECTED_ERROR };
		}
	};

	return {
		createAcademicRecord,
    deleteAcademicRecord
	};
};
