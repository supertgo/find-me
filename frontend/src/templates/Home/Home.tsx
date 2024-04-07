import * as S from './Home.styles';
import { Base } from 'components/Base/Base';
import { PreviousApplications } from 'components/PreviousApplications/PreviousApplications';
import {
  PreviousApplicationsItem,
  PreviousApplicationsItemProps,
} from 'components/PreviousApplicationsItem/PreviousApplicationsItem';
import { Title } from 'components/Title/Title';
import { Children } from 'react';
import { getSession } from 'next-auth/react';
import { useLoggedUserStore } from 'stores/loggedUserStore';

export type HomeProps = {};

const applications: PreviousApplicationsItemProps[] = [
  {
    jobTitle: 'Assistente de Redes Sociais',
    company: 'Nomad',
    workModel: 'Tempo Integral',
    isAvaliable: true,
    location: 'Paris, France',
  },
  {
    jobTitle: 'Assistente de Redes Sociais',
    company: 'Nomad',
    workModel: 'Tempo Integral',
    isAvaliable: true,
    location: 'Paris, France',
  },
  {
    jobTitle: 'Assistente de Redes Sociais',
    company: 'Nomad',
    workModel: 'Tempo Integral',
    isAvaliable: true,
    location: 'Paris, France',
  },
];

export const Home = ({}: HomeProps) => {
  const { email } = useLoggedUserStore((state) => ({
    email: state.email,
  }));

  return (
    <Base>
      <Title title="Início" />
      <S.WelcomeMessage>Bem-vindo, {`${email}`}</S.WelcomeMessage>
      <S.ApplicationsWrapper>
        <PreviousApplications title="Histórico de Aplicações Recentes">
          {Children.toArray(
            applications.map((item, key) => {
              const isEven = (key + 1) % 2 === 0;
              return <PreviousApplicationsItem white={isEven} {...item} />;
            }),
          )}
        </PreviousApplications>
        <S.MoreApplicationsWrapper>
          <S.MoreApplicationsLink>
            Ver histórico de todas aplicações
          </S.MoreApplicationsLink>
        </S.MoreApplicationsWrapper>
      </S.ApplicationsWrapper>
    </Base>
  );
};
