import { GetAuthMeRouteConst } from 'utils/routes';

export async function getAuthMe(token: string) {

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetAuthMeRouteConst}`,
		{
			headers: { Authorization: `Bearer ${token}` },
		},
	);

	if (!res.ok) {
		throw new Error('Failed to fetch job applications');
	}

	return res.json();
}
