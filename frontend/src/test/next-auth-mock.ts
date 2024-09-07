import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { DeleteAcademicRecordBody } from 'protocols/external/academic-record/academic-record';

export const ApiAuthSessionResponseMock = {
	name: 'tobias',
	email: 'tobias@gmail.com',
	password: '1234',
	access_token: 'token',
};

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost/api';

export const handlers = [
	http.get('/api/auth/session', () => {
		return HttpResponse.json(ApiAuthSessionResponseMock);
	}),
	http.delete(`${baseUrl}/user/academic-records`, async ({ request }) => {
		const res = (await request.json()) as DeleteAcademicRecordBody;
		const academicRecordId = res.academic_records_id[0];

		if (!academicRecordId) {
			return HttpResponse.json(
				{
					message: 'Mock Error',
				},
				{
					status: 404,
				},
			);
		}

		return HttpResponse.json({
			ok: true,
		});
	}),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
