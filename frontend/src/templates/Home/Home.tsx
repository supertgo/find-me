import { LinkText } from 'components/LinkText';
import { PreviousApplications } from 'components/PreviousApplications';
import { Title } from 'components/Title';
import { UserEnum } from 'protocols/external/user/user';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { Base } from 'templates/Base/Base';
import { MyApplicationsUrl } from 'utils/urls';
import * as S from './Home.styles';

export type HomeProps = {};

export const Home = ({}: HomeProps) => {
	const { email, type } = useLoggedUserStore((state) => ({
		email: state.email,
		type: state.type,
	}));

	return (
		<Base>
			<Title title="Início" />
			<S.WelcomeMessage>Bem-vindo, {`${email}`}</S.WelcomeMessage>
			{type === UserEnum.EMPLOYEE && (
				<S.ApplicationsWrapper>
					<PreviousApplications title="Histórico de Aplicações Recentes"></PreviousApplications>
					<S.MoreApplicationsWrapper>
						<LinkText
							href={`/${MyApplicationsUrl}`}
							text="Visualizar histórico de todas as aplicações"
						/>
					</S.MoreApplicationsWrapper>
				</S.ApplicationsWrapper>
			)}
		</Base>
	);
};
