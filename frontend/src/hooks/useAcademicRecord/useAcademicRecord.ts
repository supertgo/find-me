import {
	PostAcademicRecordsBody,
	PostAcademicRecordObj,
} from 'protocols/external/academic-record/academic-record';
import { toast } from 'react-toastify';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import { PostUserAcademicRecordRouteConst } from 'utils/routes';

export type CreateAcademicRecordProps = {
	academicRecord: PostAcademicRecordObj;
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

			toast.success('Formação acadêmica criada com sucesso!');
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
		createAcademicRecord,
	};
};
