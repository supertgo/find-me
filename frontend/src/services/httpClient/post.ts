import api from 'services/api/api';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse = {
  status: HttpStatusCode;
  data?: any;
  message?: string;
};

export type HttpPostParams = {
  url: string;
  body?: any;
  headers?: any;
};

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpResponse>;
}

export class PostClient implements HttpPostClient {
  async post({ url, body }: HttpPostParams) {
    return await api.post<HttpResponse>(url, body, { withCredentials: true });
  }
}
