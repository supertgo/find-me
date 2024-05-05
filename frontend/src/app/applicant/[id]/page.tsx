import { nextAuthOptions } from 'app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { UserProps } from 'protocols/external/user/user';
import { Applicant } from 'templates/Applicant/Applicant';
import { GetUserRouteConst } from 'utils/routes';

type GetDataProps = {
  data: UserProps;
};

type ApplicantPageProps = {
  params: {
    id: number;
  };
};

async function getUserData(user_id: number) {
  const token = await getServerSession(nextAuthOptions);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${GetUserRouteConst({
      user_id,
      includes: ['competences', 'academicRecords', 'professionalExperiences'],
    })}`,
    {
      headers: { Authorization: `Bearer ${token?.access_token}` },
    },
  );

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function ConfigPage({ params }: ApplicantPageProps) {
  const { data }: GetDataProps = await getUserData(params.id);

  return <Applicant user={data} />;
}
