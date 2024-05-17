import { PostAcademicRecordBody } from 'protocols/external/academic-record/academic-record';
import { toast } from 'react-toastify';
import { PostClient } from 'services/httpClient/post';
import { UNEXPECTED_ERROR } from 'utils/errors';
import { PostUserAcademicRecordRouteConst } from 'utils/routes';

export type CreateAcademicRecordProps = {
	academicRecord: PostAcademicRecordBody;
};

export const useAcademicRecord = () => {
	const createAcademicRecord = async ({
		academicRecord,
	}: CreateAcademicRecordProps) => {
		const postClient = new PostClient();

		const body: PostAcademicRecordBody = {
			...academicRecord,
		};

		try {
			await postClient.post({
				url: `/${PostUserAcademicRecordRouteConst}`,
				body,
			});

			toast.success('Formação acadêmica criada com sucesso!');
		} catch (e) {
			toast.error(UNEXPECTED_ERROR);
		}
	};

	return {
		createAcademicRecord,
	};
};
