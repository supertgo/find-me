import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getAuthMe } from 'services/fetch/auth/auth';
import { CreateJob } from 'templates/CreateJob/CreateJob';
import { HomeUrl } from 'utils/urls';

async function checkUser() {
	const session = await getServerSession(nextAuthOptions);

	if (!session?.access_token) {
		return redirect(`/${HomeUrl}`);
	}

	const { data: authMeResponse } = await getAuthMe(session?.access_token);

	if (authMeResponse.type === 'employee') {
		return redirect(`/${HomeUrl}`);
	}
}

export default async function CreateJobPage() {
	await checkUser();

	return <CreateJob />;
}
