import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Job as JobResponse } from 'protocols/external/job/job';
import { getAuthMe } from 'services/fetch/auth/auth';
import { Job } from 'templates/Job/Job';
import { GetJobRouteConst } from 'utils/routes';
import { HomeUrl } from 'utils/urls';

type GetDataProps = {
	data: JobResponse;
};

type JobApplicantsPageProps = {
	params: {
		id: number;
	};
};

async function getData(job_id: number) {
	const session = await getServerSession(nextAuthOptions);

	if (!session?.access_token) {
		return redirect(`/${HomeUrl}`);
	}

	await getAuthMe(session?.access_token);

	const jobResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetJobRouteConst({
			job_id,
			includes: ['company', 'competences'],
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

export default async function CreateJobPage({
	params,
}: JobApplicantsPageProps) {
	const { data }: GetDataProps = await getData(params.id);

	return <Job {...data} />;
}
