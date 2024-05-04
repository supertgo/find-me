export type UserType = 'recruiter' | 'employee';

export type UserProps = {
  id: number;
  name: string;
  password: string;
  email: string;
  phone: string;
  type: UserType;
};

export type UserAuthRegister = Omit<UserProps, 'id'>;

export type ShowUsersResponse = {
  data: UserProps[];
};

export type GetUserResponse = {
  data: Omit<UserProps, 'password'>;
};
