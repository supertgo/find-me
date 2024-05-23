import { LoadingConfigInfoWrapper } from 'components/ConfigInfoWrapper/LoadingConfigInfoWrapper';
import { LoadingResumeCard } from 'components/ResumeCard/LoadingResumeCard';
import { Title } from 'components/Title/Title';
import { Base } from 'templates/Base/Base';

export const LoadingConfig = () => {
	return (
		<Base>
			<Title title="Configurações" />
			<LoadingConfigInfoWrapper />
			<LoadingConfigInfoWrapper />
			<LoadingConfigInfoWrapper />
			<LoadingConfigInfoWrapper />

			<Title title="Informações" hasBorder={false} />
			<LoadingResumeCard />
			<LoadingResumeCard />
			<LoadingResumeCard />
		</Base>
	);
};
