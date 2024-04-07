import axios from 'axios';
import { SignInUrl } from 'utils/urls';
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
});

api.interceptors.request.use(async (request) => {
  const excludedUrls: string[] = [`/${SignInUrl}`];

  if (request.url && !excludedUrls.includes(request.url)) {
    const session = await getSession();

    console.log(session, 'session');

    if (session) {
      request.headers.Authorization = `Bearer ${session.access_token}`;
    }
  }

  return request;
});

api.interceptors.response.use(undefined, function onResponseError(error) {
  const { response } = error;

  if (response) {
    const { status } = response;
    if (status === 401) {
      return window.location.replace(
        `/${SignInUrl}?callbackurl=${window.location.pathname}`,
      );
    }
  }

  throw error;
});

export default api;
