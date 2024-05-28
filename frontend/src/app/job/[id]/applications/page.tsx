import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { JobApplicationResponse } from 'protocols/external/job/job-application';
import { JobApplications } from 'templates/JobApplications/JobApplications';
import {
	GetAuthMeRouteConst,
	GetJobApplicationsRouteConst,
} from 'utils/routes';
import { HomeUrl } from 'utils/urls';

type JobApplicantsPageProps = {
	params: {
		id: number;
	};
};

type GetApplicantsProp = {
	job_id: number;
};

async function getApplicants({ job_id }: GetApplicantsProp) {
	const session = await getServerSession(nextAuthOptions);

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetAuthMeRouteConst}`,
		{
			headers: { Authorization: `Bearer ${session?.access_token}` },
		},
	);

	if (!res.ok) {
		return redirect(`/${HomeUrl}`);
	}

	const { data: authMeResponse } = await res.json();

	if (authMeResponse.type === 'employee') {
		return redirect(`/${HomeUrl}`);
	}

	const jobApplicationResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetJobApplicationsRouteConst({
			jobsId: [job_id],
			includes: ['candidates'],
		})}`,
		{
			headers: { Authorization: `Bearer ${session?.access_token}` },
		},
	);

	if (!jobApplicationResponse.ok) {
		return redirect(`/${HomeUrl}`);
	}

	return jobApplicationResponse.json();
}

export default async function CreateJobPage({
	params,
}: JobApplicantsPageProps) {
	const data: JobApplicationResponse = await getApplicants({
		job_id: params.id,
	});

	return <JobApplications jobId={params.id} initialData={data} />;
}
