import { AcademicRecord } from '../academic-record/academic-record';
import { Competence } from '../competence/competence';
import { ProfessionalExperience } from '../professional-experience/professional-experience';

export type UserType = 'recruiter' | 'employee';
export type UserIncludeOption =
  | 'competences'
  | 'academicRecords'
  | 'professionalExperiences';

export type UserProps = {
  id: number;
  name: string;
  password?: string;
  email: string;
  phone: string;
  type: UserType;
  about_me: string | null;
  profile_picture_path?: string
  competences?: Competence[];
  academic_records?: AcademicRecord[];
  professional_experiences?: ProfessionalExperience[];
};

export type UserAuthRegister = Pick<
  UserProps,
  'name' | 'email' | 'password' | 'type' | 'phone'
>;

export type ShowUsersResponse = {
  data: UserProps[];
};

export type ShowUserResponse = {
  data: UserProps;
};

export type GetUserResponse = {
  data: Omit<UserProps, 'password'>;
};
