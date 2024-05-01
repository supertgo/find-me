export type GetUserRouteConstProps = {
  user_id: string;
};

export const PostAuthLoginRouteConst = 'auth/login';

export const PostAuthLogOutRouteConst = 'auth/logout';

export const GetUsersRouteConst = 'user';

export const GetUserRouteConst = ({ user_id }: GetUserRouteConstProps) => {
  return `user/${user_id}`;
};
