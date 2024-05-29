import { GetJobApplicationsRouteConst } from 'utils/routes';

export async function fetchJobApplications(token: string, job_id: number) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetJobApplicationsRouteConst({
			jobsId: [job_id],
			includes: ['candidates', 'job'],
		})}`,
		{
			headers: { Authorization: `Bearer ${token}` },
		},
	);

	if (!res.ok) {
		throw new Error('Failed to fetch job applications');
	}

	return res.json();
}
