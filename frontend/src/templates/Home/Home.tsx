import * as S from './Home.styles';
import { Base } from 'templates/Base/Base';
import { LinkText } from 'components/LinkText/LinkText';
import { PreviousApplications } from 'components/PreviousApplications/PreviousApplications';
import { Title } from 'components/Title/Title';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { applications } from 'test/mocks/external/previous-applications';
import { JobsUrl } from 'utils/urls';

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
