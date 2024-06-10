import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { JobApplicationResponse } from 'protocols/external/job/job-application';
import { UserEnum } from 'protocols/external/user/user';
import { getAuthMe } from 'services/fetch/auth/auth';
import { MyApplications } from 'templates/MyApplications/MyApplications';
import { GetJobApplicationsRouteConst } from 'utils/routes';
import { HomeUrl } from 'utils/urls';

async function getApplications() {
	const session = await getServerSession(nextAuthOptions);

	if (!session?.access_token) {
		return redirect(`/${HomeUrl}`);
	}

	const { data: authMeResponse } = await getAuthMe(session?.access_token);

	if (authMeResponse.type === UserEnum.RECRUITER) {
		return redirect(`/${HomeUrl}`);
	}

	const jobResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetJobApplicationsRouteConst({
			candidatesId: [session.id],
			includes: ['job'],
		})}`,
		{
			headers: {
				Authorization: `Bearer ${session?.access_token}`,
			},
		},
	);

	if (!jobResponse.ok) {
		return redirect(`/${HomeUrl}`);
	}

	return jobResponse.json();
}

export default async function CreateJobPage() {
	const data: JobApplicationResponse = await getApplications();

	return <MyApplications initialData={data} />;
}
