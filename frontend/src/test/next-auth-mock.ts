import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { mockJobApplication } from './mocks/external/job-application';

export const ApiAuthSessionResponseMock = {
  name: 'tobias',
  email: 'tobias@gmail.com',
  password: '1234',
  access_token:
    'token',
};

export const handlers = [
  http.get('/api/auth/session', () => {
    return HttpResponse.json(ApiAuthSessionResponseMock);
  }),
  http.get('/undefined/job-application', () => {
    return HttpResponse.json(mockJobApplication);
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
