import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const ApiAuthSessionResponseMock = {
  email: 'tobias',
  password: '1234',
};

export const handlers = [
  http.get('/api/auth/session', () => {
    return HttpResponse.json(ApiAuthSessionResponseMock);
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
