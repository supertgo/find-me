import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { UserProps } from 'protocols/external/user/user';
import { Config } from 'templates/Config/Config';
import { GetAuthMeRouteConst } from 'utils/routes';
import { HomeUrl } from 'utils/urls';

type GetDataProps = {
	data: UserProps;
};

async function getData() {
	const token = await getServerSession(nextAuthOptions);

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetAuthMeRouteConst}`,
		{
			headers: { Authorization: `Bearer ${token?.access_token}` },
		}
	);

	if (!res.ok) {
		return redirect(`/${HomeUrl}`);
	}

	return res.json();
}

export default async function ConfigPage() {
	const { data }: GetDataProps = await getData();

	return <Config {...data} />;
}
