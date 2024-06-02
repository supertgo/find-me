import { useUser } from 'hooks/useUser/useUser';
import { getInitialData } from 'utils/initialData';
import { GetUserResponse, UserProps } from 'protocols/external/user/user';
import { useQuery } from '@tanstack/react-query';
import { GetUserRouteConst } from 'utils/routes';

export type UseConfigProps = {} & UserProps;

export const useConfig = ({
	id,
	name,
	email,
	phone,
  type,
	competences,
	profile_picture_path,
	about_me,
	academic_records,
	professional_experiences,
}: UseConfigProps) => {
	const { findUser } = useUser();

	const initialData = getInitialData<GetUserResponse>({
		initialData: {
			data: {
				id,
				name,
				email,
				phone,
				type,
				about_me,
				profile_picture_path,
				competences: competences || [],
				academic_records: academic_records || [],
				professional_experiences: professional_experiences || [],
			},
		},
	});

	const { data: getUserResponse, isLoading } = useQuery({
		queryKey: [
			`/${GetUserRouteConst({
				user_id: id,
			})}`,
		],
		queryFn: () =>
			findUser({
				user_id: id,
				includes: ['competences', 'academicRecords', 'professionalExperiences'],
			}),
		initialData,
	});

  return {
    getUserResponse,
    isLoading
  };
};
