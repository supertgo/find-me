import { LinkText } from 'components/LinkText';
import { PreviousApplications } from 'components/PreviousApplications';
import { Title } from 'components/Title';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { Base } from 'templates/Base/Base';
import { applications } from 'test/mocks/external/previous-applications';
import { JobsUrl } from 'utils/urls';
import * as S from './Home.styles';

export type HomeProps = {};

export const Home = ({}: HomeProps) => {
	const { email } = useLoggedUserStore((state) => ({
		email: state.email,
	}));

	return (
		<Base>
			<Title title="Início" />
			<S.WelcomeMessage>Bem-vindo, {`${email}`}</S.WelcomeMessage>
			<S.ApplicationsWrapper>
				<PreviousApplications
					applications={applications}
					title="Histórico de Aplicações Recentes"
				></PreviousApplications>
				<S.MoreApplicationsWrapper>
					<LinkText
						href={`/${JobsUrl}`}
						text="Visualizar histórico de todas as aplicações"
					/>
				</S.MoreApplicationsWrapper>
			</S.ApplicationsWrapper>
		</Base>
	);
};
