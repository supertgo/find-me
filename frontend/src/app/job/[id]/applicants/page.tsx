import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { CreateJob } from 'templates/CreateJob/CreateJob';
import { GetAuthMeRouteConst } from 'utils/routes';
import { HomeUrl } from 'utils/urls';

type JobApplicantsPageProps = {
	params: {
		id: number;
	};
};

async function getData(job_id: number) {
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

}

export default async function CreateJobPage({
	params,
}: JobApplicantsPageProps) {
	const data = await getData(params.id);

	return <CreateJob />;
}
