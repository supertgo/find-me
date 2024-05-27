import { UserIncludeOption } from 'protocols/external/user/user';

const returnUrlWithQueries = (defaultUrl: string, params: URLSearchParams) => {
	const queryString = params.toString();

	return `${defaultUrl}${queryString ? '?' + queryString : ''}`;
};

export type GetUserRouteConstProps = {
	user_id: number;
	includes?: UserIncludeOption[];
};

export type GetJobRouteConstProps = {
	job_id: number;
	includes?: JobIncludeOption[];
};

export const GetAuthMeRouteConst = 'auth/me';

export const PostAuthLoginRouteConst = 'auth/login';

export const PostAuthLogOutRouteConst = 'auth/logout';

export const PostAuthVerifyRouteConst = 'auth/verify';

export const PostAuthRegisterRouteConst = 'auth/register';

export const PutUserRouteConst = 'user';

export const GetUsersRouteConst = 'user';

export const PostUserCompetenceRouteConst = 'user/competence';

export const PostUserAcademicRecordRouteConst = 'user/academic-records';

export const PostUserProfessionalExperiencesRouteConst =
	'user/professional-experiences';

export const DeleteUserProfessionalExperiencesRouteConst =
	'user/professional-experiences';

export const DeleteUserAcademicRecordRouteConst = 'user/academic-records';

export const DeleteUserCompetenceRouteConst = 'user/competence';

export const GetUserRouteConst = ({
	user_id,
	includes,
}: GetUserRouteConstProps) => {
	let userRoute = `user/show/${user_id}`;

	if (includes && includes.length) {
		userRoute += `?includes[]=`;
		userRoute += includes.join('&includes[]=');
	}

	return userRoute;
};

export const GetJobsRouteConst = 'job';

export const GetJobRouteConst = ({
	job_id,
	includes = [],
}: GetJobRouteConstProps) => {
	const params = new URLSearchParams();
	const jobRoute = `job/${job_id}`;

	if (includes.length) {
		params.forEach((i) => params.append('includes[]', i));
	}

	return returnUrlWithQueries(jobRoute, params);
};

export const PostJobRouteConst = 'job';

export const PostJobApplicationRouteConst = (job_id: number) =>
	`job/${job_id}/application`;

export const DeleteJobRouteConst = (job_id: number) =>
	`job/${job_id}`;

