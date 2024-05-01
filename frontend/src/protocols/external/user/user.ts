export type UserType = 'recruiter' | 'employee';

export type UserProps = {
  id: number;
  name: string;
  password: string;
  email: string;
  phone: string;
  type: UserType;
};
