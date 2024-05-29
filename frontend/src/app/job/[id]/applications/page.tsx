import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { JobApplicationResponse } from 'protocols/external/job/job-application';
import { getAuthMe } from 'services/fetch/auth/auth';
import { fetchJobApplications } from 'services/fetch/job/job';
import { JobApplications } from 'templates/JobApplications/JobApplications';
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

	if (!session?.access_token) {
		return redirect(`/${HomeUrl}`);
	}

	const authMeResponse = await getAuthMe(session?.access_token);

	if (authMeResponse.type === 'employee') {
		return redirect(`/${HomeUrl}`);
	}

	const jobApplicationResponse = await fetchJobApplications(
		session.access_token,
		job_id,
	);

	return jobApplicationResponse;
}

export default async function CreateJobPage({
	params,
}: JobApplicantsPageProps) {

	const data: JobApplicationResponse = await getApplicants({
		job_id: params.id,
	});

	return <JobApplications jobId={params.id} initialData={data} />;
}
